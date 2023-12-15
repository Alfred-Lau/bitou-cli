import showTable from "@/utils/showTable";

export function handler($) {
  // 2. check tdk 的问题
  const title = $('title').text()
  const description = $('meta[name="description"]').attr('content')
  const keywords = $('meta[name="keywords"]').attr('content')

  const hns = [['type', 'text']]
  hns.push(['title', title])
  hns.push(['description', description])
  hns.push(['keywords', keywords])

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

export const title = `\n\n检查 tdk 的问题`