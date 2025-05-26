'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { getUserProducts } from '@/shared/hooks/use-user-product';
import { Filter } from 'lucide-react';
import { useMemo, useState } from 'react';
import { DataTable } from './dashboard-table';
import { type Product, columns } from './product-columns';

export default function ProductsDataTable() {
  const { data, isError, isPending } = getUserProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = useMemo(() => {
    if (!data) return [];
    const uniqueCategories = Array.from(
      new Set(data.map((product: Product) => product.category)),
    );
    return uniqueCategories;
  }, [data]);

  // Filter data by category
  const filteredData = useMemo(() => {
    if (!data) return [];
    if (selectedCategory === 'all') return data;
    return data.filter(
      (product: Product) => product.category === selectedCategory,
    );
  }, [data, selectedCategory]);

  if (isPending) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Projects / Products</h1>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Skeleton className="h-10 w-[300px]" />
            <Skeleton className="h-10 w-[200px]" />
          </div>
          <Skeleton className="h-[400px] w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Projects / Products</h1>
        <p className="text-red-500">Failed to load products.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Projects / Products</h1>
      {/* Category Filter */}
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={filteredData}
        searchKey="title"
        searchPlaceholder="Search products..."
      />
    </div>
  );
}
