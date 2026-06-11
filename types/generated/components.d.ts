import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    buttonContent: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
  };
}

export interface ElementsContainer extends Struct.ComponentSchema {
  collectionName: 'components_elements_containers';
  info: {
    displayName: 'Container';
    icon: 'dashboard';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'elements.button', true>;
    content: Schema.Attribute.Blocks;
    hidden: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    googleMaps: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    website: Schema.Attribute.String;
    youTube: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button': ElementsButton;
      'elements.container': ElementsContainer;
      'shared.links': SharedLinks;
      'shared.seo': SharedSeo;
    }
  }
}
