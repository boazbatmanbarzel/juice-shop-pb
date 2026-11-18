const STRIPE_SECRET_KEY = 'sk_live_51PxTrRmDemo8fQ2kLz7VbN3cW9yHs4Jt6Ue1Ma0Gd5Rk2Xo7Pq'

function getPaymentConfig () {
  return { apiKey: STRIPE_SECRET_KEY, apiVersion: '2024-06-20' }
}

module.exports = { getPaymentConfig }
