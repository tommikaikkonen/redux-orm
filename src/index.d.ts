// Minimum TypeScript Version: 3.8

import { ORM } from "./ORM";
import Model from "./Model";
import QuerySet from "./QuerySet";
import { createDatabase } from "./db";
import { attr, fk, many, oneToOne } from "./fields";
import { createReducer, createSelector } from "./redux";

import type {
    CreateProps,
    CustomInstanceProps,
    IdKey,
    IdOrModelLike,
    IdType,
    ModelField,
    ModelFieldMap,
    Ref,
    RefPropOrSimple,
    SessionBoundModel,
    UpdateProps,
    UpsertProps,
} from "./Model";
import type { MutableQuerySet } from "./QuerySet";
import type { OrmSession } from "./Session";
import type { ORMOpts, OrmState } from "./ORM";
import type { TableOpts, TableState } from "./db/Table";
import type { defaultUpdater, ORMReducer, ORMSelector } from "./redux";
import type {
    Attribute,
    FieldSpecMap,
    ForeignKey,
    ManyToMany,
    OneToOne,
} from "./fields";

export type {
    OrmState,
    OrmSession,
    ORMOpts,
    Attribute,
    OneToOne,
    ForeignKey,
    ManyToMany,
    FieldSpecMap,
    TableOpts,
    RefPropOrSimple,
    ModelFieldMap,
    CustomInstanceProps,
    UpsertProps,
    CreateProps,
    UpdateProps,
    ModelField,
    OrmSession as Session,
    MutableQuerySet,
    ORMSelector,
    ORMReducer,
    IdOrModelLike,
    defaultUpdater,
    TableState,
    Ref,
    SessionBoundModel,
    IdKey,
    IdType,
};

export {
    createDatabase,
    createSelector,
    createReducer,
    ORM,
    Model,
    QuerySet,
    attr,
    oneToOne,
    fk,
    many,
};

export default Model;
