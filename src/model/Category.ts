export default interface Category {
	id: number;
	name: string;
	image: string;
	parentId?: number;
	fetched?: boolean;
	lastFetched?: boolean;
}
