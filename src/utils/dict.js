import { getDicts } from '@/api/system/dict/data'

/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((d, index) => {
      // console.log(d)
      res.value[d] = [];
      getDicts(d).then(resp => {
        //修改了一下
        res.value[d] = resp.map(p => ({ label: p.dictLabel, value: p.dictValue, elTagType: p.listClass }))
      })
    })
    return toRefs(res.value);
  })()
}