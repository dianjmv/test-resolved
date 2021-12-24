import {Item} from "../models/ItemModel";
import {GildedRoseService} from "../services/GildedRoseService";
import {GildedRoseEnum} from "../enums/GildedRoseEnum";
import {GildedFactory} from "../factories/GildedFactory";

class GildedRose {
    protected items: Array<Item>;
    protected gildedService: GildedRoseService;
    protected gildedFactory: GildedFactory

    constructor(items = [] as Array<Item>) {
        this.items = items;
        this.gildedService = new GildedRoseService();
        this.gildedFactory = new GildedFactory();
    }


    updateQuality() :Item[]  {
        this.items.forEach(currentItem => {
            switch (currentItem.name) {
                case GildedRoseEnum.AGED_BRIE: {
                    const newItem = this.gildedFactory.getInstance(GildedRoseEnum.AGED_BRIE).update(currentItem)
                    break;
                }
                case GildedRoseEnum.CONCERT: {
                    currentItem = this.gildedFactory.getInstance(GildedRoseEnum.CONCERT).update(currentItem)
                    break;
                }
                case  GildedRoseEnum.SULFURAS:  {
                    const newItem= this.gildedFactory.getInstance(GildedRoseEnum.SULFURAS).update(currentItem)
                    break;
                }
                case GildedRoseEnum.CONJURED:  {
                    const newItem = this.gildedFactory.getInstance(GildedRoseEnum.CONJURED).update(currentItem)
                    break;
                }
                default: {
                    const newItem = this.gildedFactory.getInstance().update(currentItem)
                }
            }
        })
        return this.items;
    }

}