import {BaseGildedCreator} from "./BaseGildedCreator";
import {IBaseUpdate} from "../../services/BaseService";
import {ConcertService} from "../../services/ConcertService";

export class ConcertCreator extends BaseGildedCreator{
    public factoryMethod(): IBaseUpdate {
        return new ConcertService();
    }
}