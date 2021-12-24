import {Item} from "../models/ItemModel";

export interface IBaseUpdate{
    update(item:Item)
}

export abstract class BaseUpdateService{
    protected MAXIMUM_QUALITY = 50
    protected MINIMUM_QUALITY = 0

    protected isLessThanMaximum (quality) {
        return quality < this.MAXIMUM_QUALITY
    }
    protected isOverMinimum (quality) {
        return quality > this.MINIMUM_QUALITY
    }

    protected increaseQuality (quality) {
        return this.isLessThanMaximum(quality) ? quality + 1 : quality
    }
    protected decreaseQuality (quality) {
        return this.isOverMinimum(quality) ? quality - 1 :  quality
    }
    protected updateQualityItem (item:Item): Item {
        item.quality = this.decreaseQuality(item.quality);
        item.quality = item.sellIn <= 0 ? this.decreaseQuality(item.quality) : item.quality
        return item
    }
    protected increaseQualityForConcert (item: Item): number {
        let quality = this.increaseQuality(item.quality);
        quality = item.sellIn < 11 ? this.increaseQuality(quality) : quality;
        quality = item.sellIn < 6 ? this.increaseQuality(quality) : quality;
        return quality
    }
}