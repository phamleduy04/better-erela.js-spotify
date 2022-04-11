import { SearchResult } from "@phamleduy04/erela.js";
import { BaseManager } from "./BaseManager";
export declare class TrackManager extends BaseManager {
    fetch(id: string, requester: unknown): Promise<SearchResult>;
}
