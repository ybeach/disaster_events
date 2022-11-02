import * as url from 'url';

const list = async (req, res) => {
  const params = url.parse(req.url, true).query;
  const queries = {
    fields: "id,wareki,gregorian,area,text,source,book",
    limit: Number(params.limit),
    page: Number(params.page),
    q: String(params.q)
  };
  const result = await $fetch("https://www.hi.u-tokyo.ac.jp/personal/t_yamada/output.json");
  const limit = queries.limit > 10 ? queries.limit : 10;
  const offset = queries.page > 0 ? queries.page : 0;
  const q = queries.q == "undefined" ? "" : queries.q;
  const qq = q.split(" ");
  const resData = [];
  for (let rd of result) {
    if (q.length < 1) {
      resData.push(rd);
    } else {
      let flag = true;
      for (let qs of qq) {
        if (rd["text"].indexOf(qs) < 0) {
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
};

export { list as default };
//# sourceMappingURL=list.mjs.map
