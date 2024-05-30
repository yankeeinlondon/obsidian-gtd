import { isObject } from "inferred-types";
import { DvPage } from "types/dataview_types";

/**
 * type guard which validates whether the value passed in is a `DvPage`
 * object.
 */
export const isDvPage = <T>(val: T): val is T & DvPage => {
	return isObject(val) && "file" in val && isObject(val.file) && "link" in val.file && "name" in val.file && "path" in val.file
}
