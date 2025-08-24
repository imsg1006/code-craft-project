import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search as SearchIcon, ExternalLink, Save, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";

interface SearchResult {
  title: string;
  summary: string;
  url: string;
  source: string;
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    
    // TODO: Replace with actual API call when backend is ready
    setTimeout(() => {
      const mockResults: SearchResult[] = [
        {
          title: "Understanding Quantum Computing Fundamentals",
          summary: "Quantum computing represents a paradigm shift in computational power, utilizing quantum mechanical phenomena like superposition and entanglement to process information in ways that classical computers cannot. This technology promises to revolutionize fields such as cryptography, drug discovery, and optimization problems.",
          url: "https://example.com/quantum-computing",
          source: "MIT Technology Review"
        },
        {
          title: "Current State of Quantum Computing Research",
          summary: "Recent advances in quantum computing have brought us closer to achieving quantum advantage in practical applications. Major tech companies and research institutions are making significant investments in quantum hardware and software development.",
          url: "https://example.com/quantum-research",
          source: "Nature"
        },
        {
          title: "Quantum Computing Applications in Industry",
          summary: "Industries are beginning to explore quantum computing applications for solving complex optimization problems, financial modeling, and machine learning tasks. The potential impact on various sectors is substantial.",
          url: "https://example.com/quantum-industry",
          source: "Science Direct"
        }
      ];
      setResults(mockResults);
      setIsLoading(false);
    }, 2000);
  };

  const handleSaveResult = (result: SearchResult) => {
    // TODO: Implement save functionality when backend is ready
    console.log("Saving result:", result);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">Web Search</h1>
            <p className="text-muted-foreground text-lg">
              Discover information across the web with AI-powered summaries
            </p>
          </div>

          {/* Search Form */}
          <Card className="glass-card mb-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="What would you like to search for?"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="input-ai pl-12 h-12 text-lg"
                    disabled={isLoading}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading || !query.trim()}
                  className="btn-ai-primary h-12 px-8"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <SearchIcon className="h-5 w-5 mr-2" />
                      Search
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Search Results */}
          {hasSearched && (
            <div className="space-y-6">
              {isLoading ? (
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <Loader2 className="h-12 w-12 mx-auto mb-4 animate-spin text-primary" />
                        <h3 className="text-lg font-medium mb-2">Searching the web...</h3>
                        <p className="text-muted-foreground">
                          Using DuckDuckGo to find the most relevant information
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : results.length > 0 ? (
                <>
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Search Results</h2>
                    <Badge variant="secondary" className="text-sm">
                      {results.length} results found
                    </Badge>
                  </div>
                  
                  {results.map((result, index) => (
                    <Card key={index} className="glass-card hover:glow-purple transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{result.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Globe className="h-4 w-4" />
                              <span>{result.source}</span>
                            </CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleSaveResult(result)}
                              className="text-accent hover:text-accent/80"
                            >
                              <Save className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => window.open(result.url, '_blank')}
                              className="text-primary hover:text-primary/80"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground leading-relaxed">{result.summary}</p>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Save All Results */}
                  <Card className="glass-card">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <Button className="btn-ai-primary">
                          <Save className="h-5 w-5 mr-2" />
                          Save All Results
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center py-12">
                      <SearchIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-medium mb-2">No results found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search terms or check your spelling
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Tips */}
          {!hasSearched && (
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Search Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Be specific with your queries for better results</li>
                  <li>• Ask questions naturally, like "What is quantum computing?"</li>
                  <li>• Use keywords related to your topic of interest</li>
                  <li>• Results are automatically summarized for quick understanding</li>
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;