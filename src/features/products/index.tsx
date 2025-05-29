'use client';

import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { ProductModal } from '@/shared/components/ui/product-modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { getProducts } from '@/shared/hooks/use-get-data';
import { formatCurrency } from '@/shared/utils/format-currency';
import { Filter, Search, SortAsc } from 'lucide-react';
import { useMemo, useState } from 'react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image_url: string;
  category: string;
  createdAt: string;
}

type SortOption = 'name-asc' | 'name-desc' | 'date-asc' | 'date-desc';

export default function Products() {
  const { data, isError, isPending } = getProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    if (!data) return [];
    const uniqueCategories = [
      ...new Set(data.map((product: Product) => product.category)),
    ];
    return uniqueCategories;
  }, [data]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    if (!data) return [];

    const filtered = data.filter((product: Product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a: Product, b: Product) => {
      switch (sortBy) {
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        case 'date-asc':
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case 'date-desc':
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        default:
          return 0;
      }
    });

    return filtered;
  }, [data, searchQuery, selectedCategory, sortBy]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Products</h1>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Category" />
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

          {/* Sort */}
          <Select
            value={sortBy}
            onValueChange={(value: SortOption) => setSortBy(value)}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SortAsc className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name A-Z</SelectItem>
              <SelectItem value="name-desc">Name Z-A</SelectItem>
              <SelectItem value="date-desc">Newest First</SelectItem>
              <SelectItem value="date-asc">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Error State */}
        {isError && (
          <div className="text-center py-8">
            <p className="text-destructive">Failed to load products.</p>
          </div>
        )}

        {/* Loading State */}
        {isPending ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Skeleton key={idx} className="h-[350px] w-full rounded-xl" />
            ))}
          </div>
        ) : filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found.</p>
            <p className="text-muted-foreground text-sm mt-2">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product: Product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative">
                  <img
                    src={product.image_url || '/placeholder.svg'}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <Badge variant="secondary" className="absolute top-2 left-2">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {product.description}
                  </p>
                  <p className="font-bold text-lg text-primary">
                    {formatCurrency(Number(product.price))}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}
