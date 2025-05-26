'use client';

import { Badge } from '@/shared/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/components/ui/card';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { formatCurrency } from '@/shared/utils/format-currency';
import { getProducts } from "@/shared/hooks/use-get-data"


export default function Products() {
    const { data, isError, isPending } = getProducts()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Projects / Products</h1>
            {isError && <p className="text-red-500">Failed to load products.</p>}
            {isPending ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Skeleton key={idx} className="h-[300px] w-full rounded-xl" />
                    ))}
                </div>
            ) : data?.length === 0 ? (
                <p className="text-muted-foreground">No products found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.map((product) => (
                        <Card
                            key={product.id}
                            className="overflow-hidden hover:shadow-lg transition"
                        >
                            <img
                                src={product.image_url}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{product.title}</CardTitle>
                                <CardDescription className="text-sm text-muted-foreground">
                                    {new Date(product.createdAt).toLocaleDateString()}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-2">
                                <p className="text-sm">{product.description}</p>
                                <Badge variant="outline">{product.category}</Badge>
                                <p className="font-semibold text-blue-600">{formatCurrency(Number(product.price))}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
