export declare class Field {
    readonly index: boolean;
}

export interface AttributeOpts {
    getDefault?: () => any;
}

export declare class Attribute extends Field {
    constructor(opts?: AttributeOpts);
    ["type"]: "attr";
}

export interface AttributeWithDefault extends Attribute {
    getDefault(): any;
}

export interface RelationalFieldOpts {
    to: string;
    relatedName?: string;
    through?: string;
    throughFields?: {
        to: string;
        from: string;
    };
    as?: string;
}

export declare class RelationalField extends Field {
    constructor(toModelName: string, relatedName?: string);
    constructor(opts: RelationalFieldOpts);
}

export declare class OneToOne extends RelationalField {
    ["type"]: "oneToOne";
}

export declare class ForeignKey extends RelationalField {
    readonly index: true;
    ["type"]: "fk";
}

export declare class ManyToMany extends RelationalField {
    readonly index: false;
    ["type"]: "many";
}

export interface AttrCreator {
    (): Attribute;
    (opts: AttributeOpts): AttributeWithDefault;
}

export interface FkCreator {
    (toModelName: string, relatedName?: string): ForeignKey;
    (opts: RelationalFieldOpts): ForeignKey;
}

export interface ManyCreator {
    (toModelName: string, relatedName?: string): ManyToMany;
    (opts: RelationalFieldOpts): ManyToMany;
}

export interface OneToOneCreator {
    (toModelName: string, relatedName?: string): OneToOne;
    (opts: RelationalFieldOpts): OneToOne;
}

export declare const attr: AttrCreator;

export declare const oneToOne: OneToOneCreator;

export declare const fk: FkCreator;

export declare const many: ManyCreator;

export interface FieldSpecMap {
    [K: string]: Attribute | ForeignKey | ManyToMany | OneToOne;
}
