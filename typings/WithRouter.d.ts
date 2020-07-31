import * as React from 'react';

// Copied from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/5db94ca7fd3570dc23588b404d7bb669a7886a8a/types/react-router/index.d.ts#L146
declare function withRouter<P, C extends React.ComponentType<P>>(
    component: C & React.ComponentType<P>,
): unknown;

declare const Component: React.ComponentType<{}>;
/*
Argument of type 'ComponentType<{}>' is not assignable to parameter of type 'ComponentClass<{}, any> | (ComponentClass<{}, any> & FunctionComponent<{}>)'.
  Type 'FunctionComponent<{}>' is not assignable to type 'ComponentClass<{}, any> | (ComponentClass<{}, any> & FunctionComponent<{}>)'.
    Type 'FunctionComponent<{}>' is not assignable to type 'ComponentClass<{}, any> & FunctionComponent<{}>'.
      Type 'FunctionComponent<{}>' is not assignable to type 'ComponentClass<{}, any>'.
        Type 'FunctionComponent<{}>' provides no match for the signature 'new (props: {}, context?: any): Component<{}, any, any>'.
*/