export = lasso;

type LassoType = {
    items: (selection?: any[]) => LassoType;
    possibleItems: (selection?: any[]) => LassoType;
    notPossibleItems: (selection?: any[]) => LassoType;
    selectedItems: (selection?: any[]) => LassoType;
    notSelectedItems: (selection?: any[]) => LassoType;
    hoverSelect: (hover?: boolean) => LassoType;
    closePathSelect: (close?: boolean) => LassoType;
    closePathDistance: (dist?: number) => LassoType;
    targetArea: (sel?: any) => LassoType;
    on: (event: string, callback?: (...args: any[]) => void) => LassoType;
}

declare function lasso(): LassoType;
