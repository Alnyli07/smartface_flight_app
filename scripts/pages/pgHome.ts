import PgHomeDesign from 'generated/pages/pgHome';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import Image from '@smartface/native/ui/image';
import AttributedString from '@smartface/native/ui/attributedstring';

export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
    constructor(private router?: Router, private route?: Route) {
        super({});
    }

    /**
     * @event onShow
     * This event is called when the page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        //this.initBackButton(this.router); //Addes a back button to the page headerbar.
    }

    /**
     * @event onLoad
     * This event is called once when the page is created.
     */
    onLoad() {
        super.onLoad();
        //this.tvBanner.attributedText = this.tvBanner.attributedText;
        //this.tvBanner.attributedText = [new AttributedString({ font:   string: 'Let’s Discovera New Country !' })];
        this.flPlane.onTouchEnded = (isInside, point) => {
            this.router.push('/btb/main/search');
            return true;
        }
    }
}
