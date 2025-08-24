import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Image, Filter, Calendar, Download, Trash2, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";

// Mock data for demonstration
const mockSearchResults = [
  {
    id: 1,
    query: "What is quantum computing?",
    type: "search",
    date: "2024-01-15",
    summary: "Quantum computing is a revolutionary technology that uses quantum mechanics principles...",
    sources: ["MIT Technology Review", "Nature", "Science Direct"]
  },
  {
    id: 2,
    query: "AI in healthcare applications",
    type: "search",
    date: "2024-01-14",
    summary: "Artificial intelligence is transforming healthcare through diagnostics, drug discovery...",
    sources: ["NEJM", "Healthcare IT News", "AI in Medicine"]
  }
];

const mockImages = [
  {
    id: 1,
    prompt: "A futuristic cityscape with flying cars",
    type: "image",
    date: "2024-01-15",
    url: "/placeholder.svg",
    model: "Flux"
  },
  {
    id: 2,
    prompt: "An astronaut riding a unicorn on Mars",
    type: "image",
    date: "2024-01-14",
    url: "/placeholder.svg",
    model: "Flux"
  }
];

const Dashboard = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredSearchResults = mockSearchResults.filter(item =>
    item.query.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const filteredImages = mockImages.filter(item =>
    item.prompt.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your saved searches and generated images</p>
        </div>

        {/* Search and Filter */}
        <Card className="glass-card mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search your content..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="input-ai pl-10"
                />
              </div>
              <Button variant="outline" className="btn-ai-secondary">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="glass-card mb-6">
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="searches">Web Searches</TabsTrigger>
            <TabsTrigger value="images">Generated Images</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Search Results */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Search className="h-6 w-6 mr-2 text-primary" />
                Recent Searches
              </h2>
              <div className="grid gap-4">
                {filteredSearchResults.map((result) => (
                  <Card key={result.id} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{result.query}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary">
                              <Calendar className="h-3 w-3 mr-1" />
                              {result.date}
                            </Badge>
                            <Badge variant="outline">Search</Badge>
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{result.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {result.sources.map((source, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Generated Images */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Image className="h-6 w-6 mr-2 text-accent" />
                Generated Images
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredImages.map((image) => (
                  <Card key={image.id} className="glass-card">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                        <Image className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <h3 className="font-medium mb-2 line-clamp-2">{image.prompt}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <Badge variant="secondary">
                          <Calendar className="h-3 w-3 mr-1" />
                          {image.date}
                        </Badge>
                        <Badge variant="outline">{image.model}</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="flex-1">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="flex-1">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="searches">
            <div className="grid gap-4">
              {filteredSearchResults.map((result) => (
                <Card key={result.id} className="glass-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{result.query}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary">
                            <Calendar className="h-3 w-3 mr-1" />
                            {result.date}
                          </Badge>
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{result.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.sources.map((source, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="images">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <Card key={image.id} className="glass-card">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                      <Image className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium mb-2 line-clamp-2">{image.prompt}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <Badge variant="secondary">
                        <Calendar className="h-3 w-3 mr-1" />
                        {image.date}
                      </Badge>
                      <Badge variant="outline">{image.model}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="flex-1">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;