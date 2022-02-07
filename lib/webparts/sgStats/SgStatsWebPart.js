var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { SPHttpClient, } from "@microsoft/sp-http";
import styles from "./SgStatsWebPart.module.scss";
import * as strings from "SgStatsWebPartStrings";
var SgStatsWebPart = /** @class */ (function (_super) {
    __extends(SgStatsWebPart, _super);
    function SgStatsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SgStatsWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.testpart + "\" onload=\"getLists()\">\n\n      <div class=\"" + styles.row + "\">\n        <p class=\"" + styles["expired-title"] + "\">Vencimientos</p>\n            <div class=\"" + styles["expired-container"] + "\">\n              <div class=\"" + styles["expired-expired"] + "\">\n                <p class=\"" + styles["expired-number"] + "\" id=\"expiredCounter\">0</p>\n                <p class=\"" + styles["expired-text"] + "\">Documentos vencidos</p>\n              </div>\n              <div class=\"" + styles["expired-toexpire"] + "\">\n                <p class=\"" + styles["expired-number"] + "\" id=toExpireCounter>0</p>\n                <p class=\"" + styles["expired-text"] + "\">Documentos por vencer</p>\n              </div>\n            </div>\n           </div>\n          <div id=\"listContent\" class=\"" + styles.row + " " + styles.scroll + " " + styles["scroll-horizontal"] + "\"> \n          </div>\n      </div>";
        this._bindSave();
    };
    SgStatsWebPart.prototype._bindSave = function () {
        this.getAllLists();
        this.getLists();
        //  this.getExpired();
    };
    SgStatsWebPart.prototype.getAllLists = function () {
        var _this = this;
        var url = this.context.pageContext.site.absoluteUrl + "/_api/web/lists";
        this.context.spHttpClient
            .get(url, SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            json.value.forEach(function (lista) {
                _this.getListsWithExpired(lista.Title);
            });
        });
    };
    SgStatsWebPart.prototype.noSpace = function (text) {
        var array = text
            .split("")
            .filter(function (char) { return char != " " && char != "&" && char != ","; });
        return array.join("");
    };
    SgStatsWebPart.prototype.getListsWithExpired = function (lista) {
        var _this = this;
        var url = this.context.pageContext.site.absoluteUrl +
            "/_api/web/lists/getbytitle('" +
            lista +
            "')/items";
        this.context.spHttpClient
            .get(url, SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            var expiredData = "";
            var toExpireData = "";
            var vencido = 0;
            var porVencer = 0;
            var totalExpired = 0;
            var totalToExpire = 0;
            json.value.forEach(function (item) {
                if (item.Vencimientoestado == "Vencido" ||
                    item.Vencimientoestado == "vencido") {
                    vencido = vencido + 1;
                    totalExpired = totalExpired + 1;
                }
                if (item.Vencimientoestado == "Por vencer" ||
                    item.Vencimientoestado == "Por Vencer") {
                    porVencer = porVencer + 1;
                    totalToExpire = totalToExpire + 1;
                }
            });
            expiredData += "\n          <td class=\"\"> " + vencido + "   </td>\n        ";
            toExpireData += "\n      <td class=\"\"> " + porVencer + "   </td>\n        ";
            var lizta = _this.noSpace(lista);
            var dea = _this.domElement.querySelector("#" + lizta);
            dea.innerHTML = expiredData;
            var dou = _this.domElement.querySelector("#" + lizta + "-toexpire");
            dou.innerHTML = toExpireData;
            var toExpire = _this.domElement.querySelector("#toExpireCounter");
            var actualcounttoexp = "<span>" + totalToExpire + "</span>";
            toExpire.innerHTML = actualcounttoexp;
            var expired = _this.domElement.querySelector("#expiredCounter");
            var actualcountexp = "<span>" + totalExpired + "</span>";
            expired.innerHTML = actualcountexp;
        });
    };
    SgStatsWebPart.prototype.getExpired = function () {
        var _this = this;
        var sitesUrl = this.context.pageContext.site.absoluteUrl + "/_api/web/lists";
        this.context.spHttpClient
            .get(sitesUrl, SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            var countExpired = 0;
            var countToExpire = 0;
            json.value.forEach(function (list) {
                var listUrl = sitesUrl + ("/getbytitle('" + list.Title + "')/items");
                _this.context.spHttpClient
                    .get(listUrl, SPHttpClient.configurations.v1)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    // console.log(json)
                    json.value.map(function (document) {
                        if (document.Vencimientoestado === "Vencido") {
                            countExpired = countExpired + 1;
                            console.log(countExpired);
                        }
                        if (document.Vencimientoestado === "Por vencer") {
                            countToExpire = countToExpire + 1;
                        }
                    });
                    // console.log(countExpired);
                    var toExpire = _this.domElement.querySelector("#toExpireCounter");
                    var actualcounttoexp = "<span>" + countToExpire + "</span>";
                    toExpire.innerHTML = actualcounttoexp;
                    var expired = _this.domElement.querySelector("#expiredCounter");
                    var actualcountexp = "<span>" + countExpired + "</span>";
                    expired.innerHTML = actualcountexp;
                    //?????
                    json.value.map(function (docu) {
                        if (docu.Vencimientoestado === "Vencido") {
                            var conter = 0;
                            var conter = conter + 1;
                            console.log(conter);
                            console.log(docu.Title);
                        }
                    });
                });
            });
        });
    };
    SgStatsWebPart.prototype.getLists = function () {
        var _this = this;
        var sitesUrl = this.context.pageContext.site.absoluteUrl + "/_api/web/lists";
        this.context.spHttpClient
            .get(sitesUrl, SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            console.log(json);
            var html = "<table>";
            html += "<p class=\"" + styles["expired-title"] + "\">Estad\u00EDsticas por \u00E1rea</p>";
            html += "<tr >\n        \n          <td class=\"" + styles["text"] + "\">\u00C1rea</td>\n          <td class=\"" + styles["text-alt"] + "\" >Archivos</td>\n          <td class=\"" + styles["text-alt"] + "\" >Vencidos</td>\n          <td class=\"" + styles["text-alt"] + "\" >Por vencer</td>\n        \n        </tr>\n        \n        ";
            json.value.forEach(function (list) {
                if (list.Title !== "Activos del sitio" &&
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
                    list.Title !== "test") {
                    var listId = _this.noSpace(list.Title);
                    html += "\n            <tr class=\"" + styles["table-row"] + "\">\n              <td class=\"" + styles.subTitle + " " + styles["expired-text"] + "\"><div class=\"" + styles.wrap + "\">" + list.Title + "</div>\n            </td>\n              <td class=\"\"> " + (list.ItemCount - 11) + "   </td>\n              <td class=\"\" id=\"" + listId + "\">x</td>\n              <td class=\"\" id=\"" + listId + "-toexpire\">x</td>\n            </tr>\n          ";
                }
            });
            html += "</table>";
            var listDiv = _this.domElement.querySelector("#listContent");
            listDiv.innerHTML = html;
        });
    };
    Object.defineProperty(SgStatsWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    SgStatsWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return SgStatsWebPart;
}(BaseClientSideWebPart));
export default SgStatsWebPart;
//# sourceMappingURL=SgStatsWebPart.js.map