export default interface Category {
	id: number;
	name: string;
	image: string;
	parentId?: number;
	childrenFetched?: boolean;
	fromLastFetch?: boolean;
}
