import FlightItemDesign from 'generated/my-components/FlightItem';

export default class FlightItem extends FlightItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
