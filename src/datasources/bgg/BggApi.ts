// Utilities
import { formUrl } from '../../utilities/url';

// Local
import {
    IBggThing,
    ISearchParams
} from './IBggApi';
import { IThingTag } from '../IThing';

const ROOT_PATH = 'https://www.boardgamegeek.com/xmlapi2/';


export default class BggApi {
    private static instance: BggApi;
    private static parser: DOMParser;

    private constructor() {
    }

    public static getInstance(): BggApi {
        if (!BggApi.instance) {
            BggApi.instance = new BggApi();
        }
        if (!BggApi.parser) {
            BggApi.parser = new DOMParser();
        }

        return BggApi.instance;
    }

    public static thing(callback: (response: IBggThing) => any, parameters?: any) {
        function onReadyFunction() {
            if (this.readyState === XMLHttpRequest.DONE) {
                const xml = BggApi._parseResponse(this);

                callback(BggApi._mapItemXml(xml.children[0].children[0]));
            }
        }

        BggApi._request('thing', onReadyFunction, parameters);
    }

    public static hot(callback: (response: IBggThing[]) => any) {
        function onReadyFunction() {
            if (this.readyState === XMLHttpRequest.DONE) {
                const xmlList = BggApi._parseResponse(this);
                callback([].slice.call(xmlList.children[0].children).map(BggApi._mapItemXml));
            }
        }

        BggApi._request('hot', onReadyFunction);
    }

    public static search(callback: (response: IBggThing[]) => any, parameters: ISearchParams) {
        function onReadyFunction() {
            if (this.readyState === XMLHttpRequest.DONE) {
                const xmlList = BggApi._parseResponse(this);
                callback([].slice.call(xmlList.children[0].children).map(BggApi._mapItemXml));
            }
        }

        const {
            query,
            type,
            exact
        } = parameters;

        let parsedParams: any = {
            query: query.replace(' ', '+')
        };
        if (type) {
            parsedParams['type'] = ''
            for (const t of type) {
                parsedParams['type'] += t + ',';
            }
        }
        if (exact) {
            parsedParams['exact'] = 1;
        }

        BggApi._request('search', onReadyFunction, parsedParams);
    }

    private static _parseResponse(request: XMLHttpRequest): Document {
        const xmlDom = BggApi.parser.parseFromString(request.responseText, 'application/xml');
        return xmlDom;
    }

    private static _mapItemXml(itemXml: any): IBggThing {
        const ret: IBggThing = {
            id: itemXml.getAttribute('id'),
            rank: Number(itemXml.getAttribute('rank')),
            tags: {},
        };

        function extractTag(xml: any): IThingTag {
            const tag: IThingTag = {
                value: '',
            };

            for (const attr of xml.attributes) {
                tag[attr.name] = attr.value;
            }

            if (!tag.value) {
                tag.value = xml.innerHTML;
            }

            return tag;
        }

        function generateTags(xml: any): any {
            const tags: { [key: string]: any } = {};

            for (const tag of xml.children) {
                let tagData;
                if (tag.children.length > 0) {
                    tagData = (generateTags(tag));
                } else {
                    tagData = (extractTag(tag));
                }

                if (tags[tag.tagName]) {
                    if (tags[tag.tagName] instanceof Array) {
                        tags[tag.tagName].push(tagData);
                    } else {
                        tags[tag.tagName] = [tags[tag.tagName], tagData];
                    }
                } else {
                    tags[tag.tagName] = tagData;
                }
            }

            return tags;
        }

        ret.tags = generateTags(itemXml);
        return ret;
    }

    private static _request(
        endPoint: string,
        onReadyFunction: (this: XMLHttpRequest, ev: Event) => any,
        parameters?: any) {

        // Ensure instance exists
        BggApi.getInstance();

        const request = new XMLHttpRequest();

        request.onreadystatechange = onReadyFunction;

        const url = formUrl(ROOT_PATH, endPoint, parameters);

        request.open('get', url);
        request.send();
    }
}
