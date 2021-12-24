import {Item} from "../models/ItemModel";

export class GildedRoseService{

    protected MAXIMUM_QUALITY = 50
    protected MINIMUM_QUALITY = 0

    protected isLessThanMaximum = quality => quality < this.MAXIMUM_QUALITY
    protected isOverMinimum = quality => quality > this.MINIMUM_QUALITY

    protected increaseQuality = quality => this.isLessThanMaximum(quality) ? quality + 1 : quality
    protected decreaseQuality = quality => this.isOverMinimum(quality) ? quality - 1 :  quality


    updateQualityForAgedBrie  (item :Item): Item   {
        item.quality = this.increaseQuality(item.quality)
        item.quality = item.sellIn < 0 ? this.increaseQuality(item.quality) : item.quality
        item.sellIn -= 1;
        return item
    }

    increaseQualityForConcert (item: Item): number {
        let quality = this.increaseQuality(item.quality);
        quality = item.sellIn < 11 ? this.increaseQuality(quality) : quality;
        quality = item.sellIn < 6 ? this.increaseQuality(quality) : quality;
        return quality
    }

    updateQualityForConcert  (item) :Item  {
        item.quality = item.sellIn === 0 ? 0 : this.increaseQualityForConcert(item);
        item.sellIn -= 1
        return item;
    }

    updateQualityForSulfuras (item: Item) :Item {
        item.quality = 80;
        return item
    }

    updateQualityForConjured (item:Item) :Item {
        if (item.sellIn === 5) {
            item.quality -= 3
        } else {
            item = this.updateQualityItem(item)
            item = this.updateQualityItem(item)
        }
        item.sellIn -= 1
        return item
    }

    updateQualityItem (item:Item): Item {
        item.quality = this.decreaseQuality(item.quality);
        item.quality = item.sellIn <= 0 ? this.decreaseQuality(item.quality) : item.quality
        return item
    }

    updateQualityForNormalItem (item:Item) :Item {
        item = this.updateQualityItem(item)
        item.sellIn -= 1
        return item
    }

}