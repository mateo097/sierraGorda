import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
export interface ISgStatsWebPartProps {
    description: string;
}
export default class SgStatsWebPart extends BaseClientSideWebPart<ISgStatsWebPartProps> {
    render(): void;
    private _bindSave;
    private getAllLists;
    private noSpace;
    private getListsWithExpired;
    private getExpired;
    private getLists;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SgStatsWebPart.d.ts.map