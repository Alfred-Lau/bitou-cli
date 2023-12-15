import showTable from "@/utils/showTable";



export function handler($) {
  const hns = [['index', 'href', 'text', 'inner_text', 'reference']]
  const as = $('a')

  as.each((index, element) => {
    // TODO: 需要区分内链和外链
    const href = $(element).attr('href')
    // if(new URL(href).origin !== 'https://www.oceanbase.com') return
    const text = $(element).text()
    const inner_text = $(element).html()
    const reference = $(element)
    hns.push([index, href, text, inner_text, reference])
  }
  )

  const config = {
    columns: {
      0: {
        width: 10   // Column 0 of width 1
      },
      1: {
        width: 50, // Column 1 of width 20
      },
      2: {
        width: 10   // Column 0 of width 1
      },
      3: {
        width: 20, // Column 1 of width 20
      },
      4: {
        width: 50   // Column 0 of width 1
      },

    },
  };
  showTable(hns, config)

}

export const title = `\n\n检查 内链 的问题`