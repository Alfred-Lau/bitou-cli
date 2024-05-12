import { info } from "@/utils/log"
import showTable from "@/utils/showTable"

export function handler($) {
  const hns = [['index', 'src', 'alt', 'reference']]
  //  5. check img 的问题
  const imgs = $('img')
  const img_length = imgs.length
  info('包含图片:', img_length)

  const img_errors = [['index', 'error', 'reference']]
  imgs.each((index, element) => {

    const src = $(element).attr('src')
    const alt = $(element).attr('alt')
    const reference = $(element)
    hns.push([index, src, alt, reference])
    if (!src) {
      img_errors.push([index, ' src 不存在', reference])
    } else if (!alt) {
      img_errors.push([index, ' alt 不存在', reference])
    }
  })

  const config = {
    columns: {
      0: {
        // width: 10   // Column 0 of width 1
      },
      1: {
        width: 20, // Column 1 of width 20
      },
      2: {
        width: 20, // Column 1 of width 20
      },
      3: {
        width: 20, // Column 1 of width 20
      },

    },
  };

  const error_config = {
    columns: {
      0: {
        // width: 10   // Column 0 of width 1
      },
      1: {
        width: 20, // Column 1 of width 20
      },
      2: {
        width: 20, // Column 1 of width 20
      },

    },
  };

  showTable(hns, config)
  showTable(img_errors, error_config)
}

export const title = `\n\n检查 img 的问题`