import showTable from "@/utils/showTable";

export function handler($) {
  const canonical = $('link[rel="canonical"]')
  const canonical_href = canonical.attr('href')
  const noindex = $('meta[name="robots"]')
  const noindex_content = noindex.attr('content')
  const hns = [['type', 'original', 'href']]
  hns.push(['canonical', canonical, canonical_href])
  hns.push(['noindex', noindex || 'not exist', noindex_content || 'not exist'])
  const config = {
    columns: {
      0: {
        // width: 10   // Column 0 of width 1
      },
      1: {
        width: 50, // Column 1 of width 20
      },
    },
  };
  showTable(hns, config)

}

export const title = `\n\n检查 meta 的问题`