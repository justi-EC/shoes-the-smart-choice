export interface AuthType {
	email: string;
	password: string;
}

export interface AuthTypeDispatch {
	payload: AuthType;
}

export interface ProductModel {
	id?: number;
	name?: string;
	alias?: string;
	price?: number;
	description?: string;
	size?: string;
	shortDescription?: string;
	quantity?: number;
	deleted?: boolean;
	categories?: string;
	relatedProducts?: string;
	feature?: boolean;
	image?: string;
	count: number;
}

export interface ProductModelDispatch {
	payload: ProductModel;
}
