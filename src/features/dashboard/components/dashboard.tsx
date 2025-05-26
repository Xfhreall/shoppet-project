'use client';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/shared/components/ui/card';
import { getProducts } from '@/shared/hooks/use-get-data';
import { formatCurrency } from '@/shared/utils/format-currency';

export const Dashboard = () => {
    const { data } = getProducts();

    const totalItems = data?.length;
    const categories = [...new Set(data?.map((item) => item.category))];
    const totalValue = data?.reduce((sum, item) => sum + Number(item.price), 0);


    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <p className="text-accent-foreground">Overview of your data</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                        <span className="text-2xl">📦</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalItems || 0}</div>
                        <p className="text-xs text-muted-foreground">Items in database</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Categories</CardTitle>
                        <span className="text-2xl">📂</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{categories.length || 0}</div>
                        <p className="text-xs text-muted-foreground">Unique categories</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                        <span className="text-2xl">💰</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {formatCurrency(totalValue || 0)}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Combined item values
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
