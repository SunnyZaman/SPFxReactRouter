import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ReactRouterTestWebPartStrings';
import ReactRouterTest from './components/ReactRouterTest';
import { IReactRouterTestProps } from './components/IReactRouterTestProps';

export interface IReactRouterTestWebPartProps {
  description: string;
}

export default class ReactRouterTestWebPart extends BaseClientSideWebPart<IReactRouterTestWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IReactRouterTestProps> = React.createElement(
      ReactRouterTest,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
