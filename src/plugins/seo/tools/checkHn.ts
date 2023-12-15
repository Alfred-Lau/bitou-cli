import { info } from "@/utils/log"
import showTable from "@/utils/showTable"

export function handler($) {
  const hns = [['type', 'text', 'index']]
  // 1. check hn 的问题
  const h1_length = $('h1').length
  const text = $('h1').text()
  hns.push(['h1', text, '1'])

  $('h2').each((index, element) => {
    const text = $(element).text()
    hns.push(['h2', text, index])
  })

  for (let i = 2; i < 7; i++) {
    const hn = `h${i}`
    $(hn).each((index, element) => {
      const text = $(element).text()
      hns.push([hn, text, index])
    })
  }

  const config = {
    columns: {
      0: {
        // width: 10   // Column 0 of width 1
      },
      1: {
        width: 50, // Column 1 of width 20
      },
      2: {
        width: 5, // Column 2 of width 5
      },
    },
  };
  showTable(hns, config)
}

export const title = `\n\n检查 hn 的问题`