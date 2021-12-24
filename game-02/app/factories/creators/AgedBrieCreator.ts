import {BaseGildedCreator} from "./BaseGildedCreator";
import {Item} from "../../models/ItemModel";
import {IBaseUpdate} from "../../services/BaseService";
import {AgedBrieService} from "../../services/AgedBrieService";

export class AgedBrieCreator extends BaseGildedCreator{
    public factoryMethod(): IBaseUpdate {
        return new AgedBrieService();
    }
}