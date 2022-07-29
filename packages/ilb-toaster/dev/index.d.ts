import { LitElement, PropertyValues } from 'lit';
export declare class IlbToaster extends LitElement {
    text: String;
    timer: number;
    showToast: boolean;
    static get styles(): any;
    protected updated(changedProperties: PropertyValues): void;
    toasterTimer(): void;
    render(): import("lit-html").TemplateResult<1> | "";
}
//# sourceMappingURL=index.d.ts.map