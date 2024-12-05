import { useDesign } from "@/hooks/useDesign";
import {
  Form, FormControl, FormField, FormItem,
} from "@/lib/shadcn/ui/form";
import { Input } from "@/lib/shadcn/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  search: z.string(),
});

type FormValues = z.infer<typeof schema>;

export function SearchForm() {
  const router = useRouter();

  const methods = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      search: "",
    },
    values: {
      search: (router.query.search as string) || "",
    },
  });

  const { handleSearch } = useDesign();

  const onSubmit = (values: FormValues) => {
    handleSearch(values.search);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField
          control={methods.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <FormControl>
                  <Input
                    className="pl-8"
                    type="search"
                    placeholder="Pesquisar..."
                    {...field}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
