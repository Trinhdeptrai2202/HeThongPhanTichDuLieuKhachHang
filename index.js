import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductSuggestion = () => {
  const [customerData, setCustomerData] = useState({
    ageGroup: "",
    assetGroup: "",
    assetGrowth: "",
  });

  const [suggestions, setSuggestions] = useState([]);

  const handleSuggest = () => {
    const { ageGroup, assetGroup, assetGrowth } = customerData;

    let recommendedProducts = [];

    if (ageGroup === "Truong Thanh" && assetGrowth === "Thap") {
      recommendedProducts.push("Tiết kiệm lãi suất cao", "Đầu tư rủi ro thấp");
    }

    if (assetGroup === "Thap" && assetGrowth === "Thap") {
      recommendedProducts.push("Chương trình ưu đãi gửi tiết kiệm");
    }

    setSuggestions(recommendedProducts);
  };

  return (
    <div className="p-4">
      <Card className="p-4 max-w-md mx-auto">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Tư vấn sản phẩm tài chính</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nhóm tuổi (Truong Thanh)"
              className="w-full mb-2 p-2 rounded border"
              onChange={(e) => setCustomerData({ ...customerData, ageGroup: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nhóm tài sản đầu tháng (Thap)"
              className="w-full mb-2 p-2 rounded border"
              onChange={(e) => setCustomerData({ ...customerData, assetGroup: e.target.value })}
            />
            <input
              type="text"
              placeholder="Tài sản phát sinh (Thap)"
              className="w-full mb-2 p-2 rounded border"
              onChange={(e) => setCustomerData({ ...customerData, assetGrowth: e.target.value })}
            />
            <Button onClick={handleSuggest}>Tư vấn ngay</Button>
          </div>

          {suggestions.length > 0 && (
            <ul className="mt-4">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="text-green-600">- {suggestion}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSuggestion;