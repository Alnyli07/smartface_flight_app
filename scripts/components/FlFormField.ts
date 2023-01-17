import FlFormFieldDesign from 'generated/my-components/FlFormField';

export default class FlFormField extends FlFormFieldDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
