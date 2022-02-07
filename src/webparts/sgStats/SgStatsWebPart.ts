import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import {
  ISPHttpClientOptions,
  SPHttpClient,
  SPHttpClientResponse,
} from "@microsoft/sp-http";

import styles from "./SgStatsWebPart.module.scss";
import * as strings from "SgStatsWebPartStrings";

export interface ISgStatsWebPartProps {
  description: string;
}

export default class SgStatsWebPart extends BaseClientSideWebPart<ISgStatsWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.testpart}" onload="getLists()">

      <div class="${styles.row}">
        <p class="${styles["expired-title"]}">Vencimientos</p>
            <div class="${styles["expired-container"]}">
              <div class="${styles["expired-expired"]}">
                <p class="${styles["expired-number"]}" id="expiredCounter">0</p>
                <p class="${styles["expired-text"]}">Documentos vencidos</p>
              </div>
              <div class="${styles["expired-toexpire"]}">
                <p class="${styles["expired-number"]}" id=toExpireCounter>0</p>
                <p class="${styles["expired-text"]}">Documentos por vencer</p>
              </div>
            </div>
           </div>
          <div id="listContent" class="${styles.row} ${styles.scroll} ${styles["scroll-horizontal"]}"> 
          </div>
      </div>`;
    this._bindSave();
  }

  private _bindSave(): void {
    this.getAllLists();
    this.getLists();
  //  this.getExpired();
  }

  private getAllLists(): void {
    const url = this.context.pageContext.site.absoluteUrl + "/_api/web/lists";

    this.context.spHttpClient
      .get(url, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then((json) => {
        json.value.forEach((lista) => {
          this.getListsWithExpired(lista.Title);
        });
      });
  }

  private noSpace(text) {
    let array = text
      .split("")
      .filter((char) => char != " " && char != "&" && char != ",");
    return array.join("");
  }

  private getListsWithExpired(lista: string): void {
    const url =
      this.context.pageContext.site.absoluteUrl +
      "/_api/web/lists/getbytitle('" +
      lista +
      "')/items";
    this.context.spHttpClient
      .get(url, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then((json) => {
        let expiredData: string = "";
        let toExpireData: string = "";
        var vencido: number = 0;
        var porVencer: number = 0;

        var totalExpired: number = 0;
        var totalToExpire: number = 0;

        json.value.forEach((item) => {
          if (
            item.Vencimientoestado == "Vencido" ||
            item.Vencimientoestado == "vencido"
          ) {
            vencido = vencido + 1;
            totalExpired = totalExpired + 1;
          }
          if (
            item.Vencimientoestado == "Por vencer" ||
            item.Vencimientoestado == "Por Vencer"
          ) {
            porVencer = porVencer + 1;
            totalToExpire = totalToExpire + 1;
          }
        });

        expiredData += `
          <td class=""> ${vencido}   </td>
        `;

        toExpireData += `
      <td class=""> ${porVencer}   </td>
        `;

        var lizta = this.noSpace(lista);

        const dea: Element = this.domElement.querySelector(`#${lizta}`);
        dea.innerHTML = expiredData;

        const dou: Element = this.domElement.querySelector(
          `#${lizta}-toexpire`
        );
        dou.innerHTML = toExpireData;

        const toExpire: Element =
          this.domElement.querySelector("#toExpireCounter");
        const actualcounttoexp = `<span>${totalToExpire}</span>`;
        toExpire.innerHTML = actualcounttoexp;

        const expired: Element =
          this.domElement.querySelector("#expiredCounter");
        const actualcountexp = `<span>${totalExpired}</span>`;
        expired.innerHTML = actualcountexp;
      });
  }

  private getExpired(): void {
    const sitesUrl: string =
      this.context.pageContext.site.absoluteUrl + "/_api/web/lists";

    this.context.spHttpClient
      .get(sitesUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then((json) => {
        var countExpired: number = 0;
        var countToExpire: number = 0;
        json.value.forEach((list) => {
          const listUrl: string =
            sitesUrl + `/getbytitle('${list.Title}')/items`;

          this.context.spHttpClient
            .get(listUrl, SPHttpClient.configurations.v1)
            .then((response: SPHttpClientResponse) => {
              return response.json();
            })

            .then((json) => {
              // console.log(json)
              json.value.map((document) => {
                if (document.Vencimientoestado === "Vencido") {
                  countExpired = countExpired + 1;
                  console.log(countExpired);
                }
                if (document.Vencimientoestado === "Por vencer") {
                  countToExpire = countToExpire + 1;
                }
              });
              // console.log(countExpired);
              const toExpire: Element =
                this.domElement.querySelector("#toExpireCounter");
              const actualcounttoexp = `<span>${countToExpire}</span>`;
              toExpire.innerHTML = actualcounttoexp;

              const expired: Element =
                this.domElement.querySelector("#expiredCounter");
              const actualcountexp = `<span>${countExpired}</span>`;
              expired.innerHTML = actualcountexp;

              //?????
              json.value.map((docu) => {
                if (docu.Vencimientoestado === "Vencido") {
                  var conter: number = 0;
                  var conter: number = conter + 1;
                  console.log(conter);
                  console.log(docu.Title);
                }
              });
            });
        });
      });
  }

  private getLists(): void {
    const sitesUrl: string =
      this.context.pageContext.site.absoluteUrl + "/_api/web/lists";

    this.context.spHttpClient
      .get(sitesUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);

        let html: string = "<table>";

        html += `<p class="${styles["expired-title"]}">Estadísticas por área</p>`;
        html += `<tr >
        
          <td class="${styles["text"]}">Área</td>
          <td class="${styles["text-alt"]}" >Archivos</td>
          <td class="${styles["text-alt"]}" >Vencidos</td>
          <td class="${styles["text-alt"]}" >Por vencer</td>
        
        </tr>
        
        `;

        json.value.forEach((list) => {
          if (
            list.Title !== "Activos del sitio" &&
            list.Title !== "appdata" &&
            list.Title !== "appfiles" &&
            list.Title !== "Biblioteca de estilos" &&
            list.Title !== "Biblioteca de registros de mantenimiento" &&
            list.Title !== "Diseños compuestos" &&
            list.Title !==
              "DO_NOT_DELETE_SPLIST_SITECOLLECTION_AGGREGATED_CONTENTTYPES" &&
            list.Title !== "Documentos" &&
            list.Title !== "Documentos de venta al por menor" &&
            list.Title !== "Eventos" &&
            list.Title !== "Extensiones de plantillas web" &&
            list.Title !== "Formularios convertidos" &&
            list.Title !== "Galería de elementos web" &&
            list.Title !== "Galería de páginas principales" &&
            list.Title !== "Galería de plantillas de listas" &&
            list.Title !== "Galería de soluciones" &&
            list.Title !== "Galería de temas" &&
            list.Title !== "TaxonomyHiddenList" &&
            list.Title !== "Páginas del sitio" &&
            list.Title !== "Plantillas de formulario" &&
            list.Title !==
              "Sustentabilidad, Asuntos corporativos y Legal - Sustentabilidad-Comunidades Externas" &&
            list.Title !==
              "Gerencia Servicios Técnicos - SI Aseguramiento de Calidad y Laboratorio" &&
            list.Title !==
              "Sustentabilidad, Asuntos corporativos y Legal - Legal-Propiedad Minera" &&
            list.Title !== "test"
          ) {
            var listId = this.noSpace(list.Title);
            html += `
            <tr class="${styles["table-row"]}">
              <td class="${styles.subTitle} ${
              styles["expired-text"]
            }"><div class="${styles.wrap}">${list.Title}</div>
            </td>
              <td class=""> ${list.ItemCount - 11}   </td>
              <td class="" id="${listId}">x</td>
              <td class="" id="${listId}-toexpire">x</td>
            </tr>
          `;
          }
        });

        html += "</table>";

        const listDiv: Element = this.domElement.querySelector("#listContent");

        listDiv.innerHTML = html;
      });
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
