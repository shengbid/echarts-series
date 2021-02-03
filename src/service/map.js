import request from './request'

// 获取省份数据
export const getProvince = (keywords) => {
  return request({
    url: '/v3/config/district',
    method: 'get',
    params: {
      keywords,
      key: 'ff4f3628c131226ae8d6fa43d7386feb'
    }
  })
}
