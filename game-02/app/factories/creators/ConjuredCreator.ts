import {BaseGildedCreator} from "./BaseGildedCreator";
import {IBaseUpdate} from "../../services/BaseService";
import {ConjuredService} from "../../services/ConjuredService";

export class ConjuredCreator extends BaseGildedCreator{
    public factoryMethod(): IBaseUpdate {
        return new ConjuredService();
    }
}