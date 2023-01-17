import FlHeaderDesign from 'generated/my-components/FlHeader';
import Image from '@smartface/native/ui/image'

export default class FlHeader extends FlHeaderDesign {
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;

        setTimeout(() =>
            this.img.loadFromUrl({
                url: 'https://www.gravatar.com/avatar/a0112b54f6d7c03ea40c28a4351acfe3?s=200&fake.png',
                onSuccess: () => {
                    console.info('Success: ', this.img.image);
                    //this.img.image = (this.img.image as Image).android.round(100);
                }
            })
            , 3000);
    }
}
