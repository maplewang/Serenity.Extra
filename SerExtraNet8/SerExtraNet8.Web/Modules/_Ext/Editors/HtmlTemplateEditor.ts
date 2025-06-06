import { CKEditorConfig, Decorators, HtmlContentEditor, HtmlContentEditorOptions, WidgetProps } from "@serenity-is/corelib"
import { PrefixedStringEditorOptions } from "./PrefixedStringEditor";

@Decorators.registerEditor('_Ext.HtmlTemplateEditor')
export class HtmlTemplateEditor extends HtmlContentEditor {
    constructor(props: WidgetProps<PrefixedStringEditorOptions>) {
        super(props);
    }

    protected getConfig(): CKEditorConfig {
        var config = super.getConfig() as any;

        config.extraPlugins = config.extraPlugins || '';

        var placehorders = (this.options as any).placeholders as string;
        if (placehorders) {
            config.placeholder_select = {
                placeholders: placehorders.split(',')
            }
            config.extraPlugins += ',richcombo,placeholder_select';
        }

        config.allowedContent = true;
        config.enterMode = window['CKEDITOR'].ENTER_BR;
        config.extraPlugins += ',showborders,font,justify';

        config.removeButtons = '';

        return config;
    }
}

export interface HtmlTemplateEditorOptions extends HtmlContentEditorOptions {
    cols?: any;
    rows?: any;

    placeholders?: any;
}
