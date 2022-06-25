import { User } from ".";
import { Item } from ".";

export interface State {
    user: User,
    items: Item[]
}