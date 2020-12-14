/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { Yy1_BpsocialmediaRequestBuilder } from './Yy1_BpsocialmediaRequestBuilder';
import { StringField, Link, AllFields, CustomField, Entity, EntityBuilderType, Selectable } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "YY1_BPSOCIALMEDIA" of service "YY1_BPSOCIALMEDIA_CDS".
 */
export class Yy1_Bpsocialmedia extends Entity implements Yy1_BpsocialmediaType {
  /**
   * Technical entity name for Yy1_Bpsocialmedia.
   */
  static _entityName = 'YY1_BPSOCIALMEDIA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Yy1_Bpsocialmedia.
   */
  static _serviceName = 'YY1_BPSOCIALMEDIA_CDS';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/YY1_BPSOCIALMEDIA_CDS';
  /**
   * 16 Byte UUID in 16 Bytes (Raw Format).
   */
  sapUuid!: string;
  /**
   * Business Partner.
   * Maximum length: 10.
   * @nullable
   */
  businessPartner?: string;
  /**
   * One-to-many navigation property to the [[Yy1_Socialmediaaccount_Bpso000]] entity.
   */
  toSocialMediaAccount!: Yy1_Socialmediaaccount_Bpso000[];

  /**
   * Returns an entity builder to construct instances `Yy1_Bpsocialmedia`.
   * @returns A builder that constructs instances of entity type `Yy1_Bpsocialmedia`.
   */
  static builder(): EntityBuilderType<Yy1_Bpsocialmedia, Yy1_BpsocialmediaTypeForceMandatory> {
    return Entity.entityBuilder(Yy1_Bpsocialmedia);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Yy1_Bpsocialmedia` entity type.
   * @returns A `Yy1_Bpsocialmedia` request builder.
   */
  static requestBuilder(): Yy1_BpsocialmediaRequestBuilder {
    return new Yy1_BpsocialmediaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Yy1_Bpsocialmedia`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Yy1_Bpsocialmedia`.
   */
  static customField(fieldName: string): CustomField<Yy1_Bpsocialmedia> {
    return Entity.customFieldSelector(fieldName, Yy1_Bpsocialmedia);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Yy1_Socialmediaaccount_Bpso000, Yy1_Socialmediaaccount_Bpso000Type } from './Yy1_Socialmediaaccount_Bpso000';

export interface Yy1_BpsocialmediaType {
  sapUuid: string;
  businessPartner?: string;
  toSocialMediaAccount: Yy1_Socialmediaaccount_Bpso000Type[];
}

export interface Yy1_BpsocialmediaTypeForceMandatory {
  sapUuid: string;
  businessPartner: string;
  toSocialMediaAccount: Yy1_Socialmediaaccount_Bpso000Type[];
}

export namespace Yy1_Bpsocialmedia {
  /**
   * Static representation of the [[sapUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_UUID: StringField<Yy1_Bpsocialmedia> = new StringField('SAP_UUID', Yy1_Bpsocialmedia, 'Edm.Guid');
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: StringField<Yy1_Bpsocialmedia> = new StringField('BusinessPartner', Yy1_Bpsocialmedia, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[toSocialMediaAccount]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SOCIAL_MEDIA_ACCOUNT: Link<Yy1_Bpsocialmedia, Yy1_Socialmediaaccount_Bpso000> = new Link('to_SocialMediaAccount', Yy1_Bpsocialmedia, Yy1_Socialmediaaccount_Bpso000);
  /**
   * All fields of the Yy1_Bpsocialmedia entity.
   */
  export const _allFields: Array<StringField<Yy1_Bpsocialmedia> | Link<Yy1_Bpsocialmedia, Yy1_Socialmediaaccount_Bpso000>> = [
    Yy1_Bpsocialmedia.SAP_UUID,
    Yy1_Bpsocialmedia.BUSINESS_PARTNER,
    Yy1_Bpsocialmedia.TO_SOCIAL_MEDIA_ACCOUNT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Yy1_Bpsocialmedia> = new AllFields('*', Yy1_Bpsocialmedia);
  /**
   * All key fields of the Yy1_Bpsocialmedia entity.
   */
  export const _keyFields: Array<Selectable<Yy1_Bpsocialmedia>> = [Yy1_Bpsocialmedia.SAP_UUID];
  /**
   * Mapping of all key field names to the respective static field property Yy1_Bpsocialmedia.
   */
  export const _keys: { [keys: string]: Selectable<Yy1_Bpsocialmedia> } = Yy1_Bpsocialmedia._keyFields.reduce((acc: { [keys: string]: Selectable<Yy1_Bpsocialmedia> }, field: Selectable<Yy1_Bpsocialmedia>) => {
    acc[field.fieldName] = field;
    return acc;
  }, {});
}
