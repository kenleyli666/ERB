product = "蘋果"
quantity = 5
unit_price = 2.5

print(f"訂單詳情：")
print(f"商品：{product:<10}")
print(f"數量：{quantity:>10}")
print(f"單價：{unit_price:>10.2f}")
print(f"總價：{quantity * unit_price:>10.2f}")
