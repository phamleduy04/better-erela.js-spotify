import { SearchResult } from "@phamleduy04/erela.js";
import { SpotifyTrack } from "../typings";
import { BaseManager } from "./BaseManager";
export declare class ArtistManager extends BaseManager {
    fetch(id: string, requester: unknown): Promise<SearchResult>;
}
export interface SpotifyArtistTracks {
    tracks: SpotifyTrack[];
}
export interface SpotifyArtist {
    id: string;
    name: string;
}
