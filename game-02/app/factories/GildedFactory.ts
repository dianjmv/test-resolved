import {GildedRoseEnum} from "../enums/GildedRoseEnum";
import {SulfurasCreator} from "./creators/SulfurasCreator";
import {AgedBrieCreator} from "./creators/AgedBrieCreator";
import {ConjuredCreator} from "./creators/ConjuredCreator";
import {ConcertCreator} from "./creators/ConcertCreator";
import {DefaultCreator} from "./creators/DefaultCreator";

export class GildedFactory{
    getInstance(GildedRoseEnum?){
        switch (GildedRoseEnum){
            case GildedRoseEnum.SULFURAS:
                return new SulfurasCreator().factoryMethod()
            case GildedRoseEnum.AGED_BRIE:
                return new AgedBrieCreator().factoryMethod()
            case GildedRoseEnum.CONJURED:
                return new ConjuredCreator().factoryMethod()
            case GildedRoseEnum.CONCERT:
                return new ConcertCreator().factoryMethod()
            default:
                return new DefaultCreator().factoryMethod()
        }
    }
}