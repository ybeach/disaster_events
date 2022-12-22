import type { IncomingMessage, ServerResponse } from 'http'
//import client from './client'
import * as url from "url";

export type Article = {
	id: string,
	wareki: string,
	gregorian: string,
	area: string,
	text: string,
	source: string,
	book: string,
  }

export default async (req: IncomingMessage, res: ServerResponse) => {
	const params = url.parse(req.url as string, true).query;
	const queries = {
		fields: 'id,wareki,gregorian,area,text,source,book',
		limit: Number(params.limit),
		page: Number(params.page),
		q: String(params.q),
	}
	//const result: Article[] = await $fetch('https://www.hi.u-tokyo.ac.jp/personal/t_yamada/output.json');
	const items_ : any = await import('~~/src/assets/json/output.json');
	const result: Article[] = items_.default;

	const limit = queries.limit > 10 ? queries.limit : 10;
	const offset = queries.page > 0 ? queries.page : 0;
	const q = queries.q == "undefined" ? "" : queries.q;

	//console.log("q=" + q, q.split(" "));
	const qq = q.split(" ");

	const resData: Article[] = [];
	for (let rd of result) {
		if (q.length < 1) {
			resData.push(rd);
		} else {
			let flag = true;
			for (let qs of qq) {
				if (rd['text'].indexOf(qs) < 0) {
					flag = false;
					break;
				}
			}
			if (flag) {
				resData.push(rd);
			}
		}
	}
	const total = resData.length;
	const start = Math.max(0, (offset - 1) * limit);
	const end = Math.min(start + limit, resData.length);
	const resd = resData.slice(start, end);

	return { resd, start, end, total };
}