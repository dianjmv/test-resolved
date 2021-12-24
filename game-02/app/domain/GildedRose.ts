import {Item} from "../models/ItemModel";
import {GildedRoseService} from "../services/GildedRoseService";
import {GildedRoseEnum} from "../enums/GildedRoseEnum";

class GildedRose {
    protected items: Array<Item>;
    protected gildedService: GildedRoseService;

    constructor(items = [] as Array<Item>) {
        this.items = items;
        this.gildedService = new GildedRoseService();
    }

    updateQuality() :Item[]  {
        this.items.forEach(currentItem => {
            switch (currentItem.name) {
                case GildedRoseEnum.AGED_BRIE: {
                    currentItem = this.gildedService.updateQualityForAgedBrie(currentItem)
                    break;
                }
                case GildedRoseEnum.CONCERT: {
                    currentItem = this.gildedService.updateQualityForConcert(currentItem)
                    break;
                }
                case  GildedRoseEnum.SULFURAS:  {
                    currentItem = this.gildedService.updateQualityForSulfuras(currentItem)
                    break;
                }
                case GildedRoseEnum.CONJURED:  {
                    currentItem = this.gildedService.updateQualityForConjured(currentItem)
                    break;
                }
                default: {
                    currentItem = this.gildedService.updateQualityForNormalItem(currentItem)
                }
            }
        })
        return this.items;
    }

}