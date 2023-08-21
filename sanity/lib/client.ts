import { createClient } from "next-sanity";



import { apiVersion, dataset, projectId, useCdn } from "../env";


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sksFGuRsWUDN4jlA1nKpLv1YjgeA6YrN6cpD3rTvw1L04FQpVOQ4UQT7kf8LPCsN8aHsIB6O6rmbl8Ro0OUgpj39UmXiX77JbLa0Skop1MUdnKpHXG4UmQh4tRHjn1WFEMN7RmAWIMHebyL0AfHAJzxLogknIFKzouK6GvzMDZYlvYzGWNdd",
})