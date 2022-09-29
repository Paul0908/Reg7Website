/**
 *  title: string;
 *     icon: any;
 *     color: string;
 *     fontColor?: string;
 *     represents a skill box
 */
import {SafeHtml} from "@angular/platform-browser";

export interface SkillBox {
    title: SafeHtml;
    icon: any;
    color: string;
    fontColor?: string;
    borderColor?: string;
}
