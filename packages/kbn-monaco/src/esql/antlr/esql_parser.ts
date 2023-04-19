// @ts-nocheck
// Generated from src/esql/antlr/esql_parser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { esql_parserListener } from "./esql_parserListener";

export class esql_parser extends Parser {
	public static readonly DISSECT = 1;
	public static readonly GROK = 2;
	public static readonly EVAL = 3;
	public static readonly EXPLAIN = 4;
	public static readonly FROM = 5;
	public static readonly ROW = 6;
	public static readonly STATS = 7;
	public static readonly WHERE = 8;
	public static readonly SORT = 9;
	public static readonly LIMIT = 10;
	public static readonly PROJECT = 11;
	public static readonly DROP = 12;
	public static readonly RENAME = 13;
	public static readonly LINE_COMMENT = 14;
	public static readonly MULTILINE_COMMENT = 15;
	public static readonly WS = 16;
	public static readonly PIPE = 17;
	public static readonly STRING = 18;
	public static readonly INTEGER_LITERAL = 19;
	public static readonly DECIMAL_LITERAL = 20;
	public static readonly BY = 21;
	public static readonly DATE_LITERAL = 22;
	public static readonly AND = 23;
	public static readonly ASSIGN = 24;
	public static readonly COMMA = 25;
	public static readonly DOT = 26;
	public static readonly LP = 27;
	public static readonly OPENING_BRACKET = 28;
	public static readonly CLOSING_BRACKET = 29;
	public static readonly NOT = 30;
	public static readonly LIKE = 31;
	public static readonly RLIKE = 32;
	public static readonly NULL = 33;
	public static readonly OR = 34;
	public static readonly RP = 35;
	public static readonly BOOLEAN_VALUE = 36;
	public static readonly COMPARISON_OPERATOR = 37;
	public static readonly PLUS = 38;
	public static readonly MINUS = 39;
	public static readonly ASTERISK = 40;
	public static readonly SLASH = 41;
	public static readonly PERCENT = 42;
	public static readonly ORDERING = 43;
	public static readonly NULLS_ORDERING = 44;
	public static readonly NULLS_ORDERING_DIRECTION = 45;
	public static readonly MATH_FUNCTION = 46;
	public static readonly UNARY_FUNCTION = 47;
	public static readonly IS_NULL_FUNCTION = 48;
	public static readonly UNQUOTED_IDENTIFIER = 49;
	public static readonly QUOTED_IDENTIFIER = 50;
	public static readonly EXPR_LINE_COMMENT = 51;
	public static readonly EXPR_MULTILINE_COMMENT = 52;
	public static readonly EXPR_WS = 53;
	public static readonly SRC_UNQUOTED_IDENTIFIER = 54;
	public static readonly SRC_QUOTED_IDENTIFIER = 55;
	public static readonly SRC_LINE_COMMENT = 56;
	public static readonly SRC_MULTILINE_COMMENT = 57;
	public static readonly SRC_WS = 58;
	public static readonly RULE_singleStatement = 0;
	public static readonly RULE_query = 1;
	public static readonly RULE_sourceCommand = 2;
	public static readonly RULE_processingCommand = 3;
	public static readonly RULE_whereCommand = 4;
	public static readonly RULE_booleanExpression = 5;
	public static readonly RULE_regexBooleanExpression = 6;
	public static readonly RULE_valueExpression = 7;
	public static readonly RULE_comparison = 8;
	public static readonly RULE_mathFn = 9;
	public static readonly RULE_mathEvalFn = 10;
	public static readonly RULE_operatorExpression = 11;
	public static readonly RULE_primaryExpression = 12;
	public static readonly RULE_rowCommand = 13;
	public static readonly RULE_fields = 14;
	public static readonly RULE_field = 15;
	public static readonly RULE_userVariable = 16;
	public static readonly RULE_fromCommand = 17;
	public static readonly RULE_evalCommand = 18;
	public static readonly RULE_statsCommand = 19;
	public static readonly RULE_sourceIdentifier = 20;
	public static readonly RULE_functionExpressionArgument = 21;
	public static readonly RULE_mathFunctionExpressionArgument = 22;
	public static readonly RULE_qualifiedName = 23;
	public static readonly RULE_qualifiedNames = 24;
	public static readonly RULE_identifier = 25;
	public static readonly RULE_mathFunctionIdentifier = 26;
	public static readonly RULE_functionIdentifier = 27;
	public static readonly RULE_constant = 28;
	public static readonly RULE_limitCommand = 29;
	public static readonly RULE_sortCommand = 30;
	public static readonly RULE_orderExpression = 31;
	public static readonly RULE_projectCommand = 32;
	public static readonly RULE_dropCommand = 33;
	public static readonly RULE_renameVariable = 34;
	public static readonly RULE_renameCommand = 35;
	public static readonly RULE_renameClause = 36;
	public static readonly RULE_dissectCommand = 37;
	public static readonly RULE_grokCommand = 38;
	public static readonly RULE_commandOptions = 39;
	public static readonly RULE_commandOption = 40;
	public static readonly RULE_booleanValue = 41;
	public static readonly RULE_number = 42;
	public static readonly RULE_string = 43;
	public static readonly RULE_comparisonOperator = 44;
	public static readonly RULE_explainCommand = 45;
	public static readonly RULE_subqueryExpression = 46;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"singleStatement", "query", "sourceCommand", "processingCommand", "whereCommand", 
		"booleanExpression", "regexBooleanExpression", "valueExpression", "comparison", 
		"mathFn", "mathEvalFn", "operatorExpression", "primaryExpression", "rowCommand", 
		"fields", "field", "userVariable", "fromCommand", "evalCommand", "statsCommand", 
		"sourceIdentifier", "functionExpressionArgument", "mathFunctionExpressionArgument", 
		"qualifiedName", "qualifiedNames", "identifier", "mathFunctionIdentifier", 
		"functionIdentifier", "constant", "limitCommand", "sortCommand", "orderExpression", 
		"projectCommand", "dropCommand", "renameVariable", "renameCommand", "renameClause", 
		"dissectCommand", "grokCommand", "commandOptions", "commandOption", "booleanValue", 
		"number", "string", "comparisonOperator", "explainCommand", "subqueryExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'dissect'", "'grok'", "'eval'", "'explain'", "'from'", "'row'", 
		"'stats'", "'where'", "'sort'", "'limit'", "'project'", "'drop'", "'rename'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'by'", undefined, "'and'", undefined, undefined, "'.'", "'('", "'['", 
		"']'", "'not'", "'like'", "'rlike'", "'null'", "'or'", "')'", undefined, 
		undefined, "'+'", "'-'", "'*'", "'/'", "'%'", undefined, "'nulls'", undefined, 
		undefined, undefined, "'is_null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DISSECT", "GROK", "EVAL", "EXPLAIN", "FROM", "ROW", "STATS", 
		"WHERE", "SORT", "LIMIT", "PROJECT", "DROP", "RENAME", "LINE_COMMENT", 
		"MULTILINE_COMMENT", "WS", "PIPE", "STRING", "INTEGER_LITERAL", "DECIMAL_LITERAL", 
		"BY", "DATE_LITERAL", "AND", "ASSIGN", "COMMA", "DOT", "LP", "OPENING_BRACKET", 
		"CLOSING_BRACKET", "NOT", "LIKE", "RLIKE", "NULL", "OR", "RP", "BOOLEAN_VALUE", 
		"COMPARISON_OPERATOR", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", 
		"ORDERING", "NULLS_ORDERING", "NULLS_ORDERING_DIRECTION", "MATH_FUNCTION", 
		"UNARY_FUNCTION", "IS_NULL_FUNCTION", "UNQUOTED_IDENTIFIER", "QUOTED_IDENTIFIER", 
		"EXPR_LINE_COMMENT", "EXPR_MULTILINE_COMMENT", "EXPR_WS", "SRC_UNQUOTED_IDENTIFIER", 
		"SRC_QUOTED_IDENTIFIER", "SRC_LINE_COMMENT", "SRC_MULTILINE_COMMENT", 
		"SRC_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(esql_parser._LITERAL_NAMES, esql_parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return esql_parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "esql_parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return esql_parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return esql_parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(esql_parser._ATN, this);
	}
	// @RuleVersion(0)
	public singleStatement(): SingleStatementContext {
		let _localctx: SingleStatementContext = new SingleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, esql_parser.RULE_singleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.query(0);
			this.state = 95;
			this.match(esql_parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public query(): QueryContext;
	public query(_p: number): QueryContext;
	// @RuleVersion(0)
	public query(_p?: number): QueryContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryContext = new QueryContext(this._ctx, _parentState);
		let _prevctx: QueryContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, esql_parser.RULE_query, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new SingleCommandQueryContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 98;
			this.sourceCommand();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 105;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CompositeQueryContext(new QueryContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_query);
					this.state = 100;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 101;
					this.match(esql_parser.PIPE);
					this.state = 102;
					this.processingCommand();
					}
					}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceCommand(): SourceCommandContext {
		let _localctx: SourceCommandContext = new SourceCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, esql_parser.RULE_sourceCommand);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.EXPLAIN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.explainCommand();
				}
				break;
			case esql_parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.fromCommand();
				}
				break;
			case esql_parser.ROW:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 110;
				this.rowCommand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processingCommand(): ProcessingCommandContext {
		let _localctx: ProcessingCommandContext = new ProcessingCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, esql_parser.RULE_processingCommand);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.EVAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				this.evalCommand();
				}
				break;
			case esql_parser.LIMIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.limitCommand();
				}
				break;
			case esql_parser.PROJECT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				this.projectCommand();
				}
				break;
			case esql_parser.RENAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 116;
				this.renameCommand();
				}
				break;
			case esql_parser.DROP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 117;
				this.dropCommand();
				}
				break;
			case esql_parser.DISSECT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 118;
				this.dissectCommand();
				}
				break;
			case esql_parser.GROK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 119;
				this.grokCommand();
				}
				break;
			case esql_parser.SORT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 120;
				this.sortCommand();
				}
				break;
			case esql_parser.STATS:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 121;
				this.statsCommand();
				}
				break;
			case esql_parser.WHERE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 122;
				this.whereCommand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereCommand(): WhereCommandContext {
		let _localctx: WhereCommandContext = new WhereCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, esql_parser.RULE_whereCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(esql_parser.WHERE);
			this.state = 126;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, esql_parser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 129;
				this.match(esql_parser.NOT);
				this.state = 130;
				this.booleanExpression(6);
				}
				break;

			case 2:
				{
				this.state = 131;
				this.valueExpression();
				}
				break;

			case 3:
				{
				this.state = 132;
				this.regexBooleanExpression();
				}
				break;

			case 4:
				{
				this.state = 133;
				this.match(esql_parser.IS_NULL_FUNCTION);
				this.state = 134;
				this.match(esql_parser.LP);
				this.state = 135;
				this.qualifiedName();
				this.state = 136;
				this.match(esql_parser.RP);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 148;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 146;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new BooleanExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_booleanExpression);
						this.state = 140;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 141;
						_localctx._operator = this.match(esql_parser.AND);
						this.state = 142;
						_localctx._right = this.booleanExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new BooleanExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_booleanExpression);
						this.state = 143;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 144;
						_localctx._operator = this.match(esql_parser.OR);
						this.state = 145;
						_localctx._right = this.booleanExpression(3);
						}
						break;
					}
					}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public regexBooleanExpression(): RegexBooleanExpressionContext {
		let _localctx: RegexBooleanExpressionContext = new RegexBooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, esql_parser.RULE_regexBooleanExpression);
		let _la: number;
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this.valueExpression();
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === esql_parser.NOT) {
					{
					this.state = 152;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 155;
				_localctx._kind = this.match(esql_parser.LIKE);
				this.state = 156;
				_localctx._pattern = this.string();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.valueExpression();
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === esql_parser.NOT) {
					{
					this.state = 159;
					this.match(esql_parser.NOT);
					}
				}

				this.state = 162;
				_localctx._kind = this.match(esql_parser.RLIKE);
				this.state = 163;
				_localctx._pattern = this.string();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueExpression(): ValueExpressionContext {
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, esql_parser.RULE_valueExpression);
		try {
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 167;
				this.operatorExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 168;
				this.comparison();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, esql_parser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			_localctx._left = this.operatorExpression(0);
			this.state = 172;
			this.comparisonOperator();
			this.state = 173;
			_localctx._right = this.operatorExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathFn(): MathFnContext {
		let _localctx: MathFnContext = new MathFnContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, esql_parser.RULE_mathFn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.functionIdentifier();
			this.state = 176;
			this.match(esql_parser.LP);
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === esql_parser.STRING || _la === esql_parser.UNQUOTED_IDENTIFIER || _la === esql_parser.QUOTED_IDENTIFIER) {
				{
				this.state = 177;
				this.functionExpressionArgument();
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === esql_parser.COMMA) {
					{
					{
					this.state = 178;
					this.match(esql_parser.COMMA);
					this.state = 179;
					this.functionExpressionArgument();
					}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 187;
			this.match(esql_parser.RP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathEvalFn(): MathEvalFnContext {
		let _localctx: MathEvalFnContext = new MathEvalFnContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, esql_parser.RULE_mathEvalFn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.mathFunctionIdentifier();
			this.state = 190;
			this.match(esql_parser.LP);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << esql_parser.STRING) | (1 << esql_parser.INTEGER_LITERAL) | (1 << esql_parser.DECIMAL_LITERAL) | (1 << esql_parser.LP))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (esql_parser.NULL - 33)) | (1 << (esql_parser.BOOLEAN_VALUE - 33)) | (1 << (esql_parser.PLUS - 33)) | (1 << (esql_parser.MINUS - 33)) | (1 << (esql_parser.MATH_FUNCTION - 33)) | (1 << (esql_parser.UNARY_FUNCTION - 33)) | (1 << (esql_parser.UNQUOTED_IDENTIFIER - 33)) | (1 << (esql_parser.QUOTED_IDENTIFIER - 33)))) !== 0)) {
				{
				this.state = 191;
				this.mathFunctionExpressionArgument();
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === esql_parser.COMMA) {
					{
					{
					this.state = 192;
					this.match(esql_parser.COMMA);
					this.state = 193;
					this.mathFunctionExpressionArgument();
					}
					}
					this.state = 198;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 201;
			this.match(esql_parser.RP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public operatorExpression(): OperatorExpressionContext;
	public operatorExpression(_p: number): OperatorExpressionContext;
	// @RuleVersion(0)
	public operatorExpression(_p?: number): OperatorExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: OperatorExpressionContext = new OperatorExpressionContext(this._ctx, _parentState);
		let _prevctx: OperatorExpressionContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, esql_parser.RULE_operatorExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.STRING:
			case esql_parser.INTEGER_LITERAL:
			case esql_parser.DECIMAL_LITERAL:
			case esql_parser.LP:
			case esql_parser.NULL:
			case esql_parser.BOOLEAN_VALUE:
			case esql_parser.UNQUOTED_IDENTIFIER:
			case esql_parser.QUOTED_IDENTIFIER:
				{
				this.state = 204;
				this.primaryExpression();
				}
				break;
			case esql_parser.UNARY_FUNCTION:
				{
				this.state = 205;
				this.mathFn();
				}
				break;
			case esql_parser.MATH_FUNCTION:
				{
				this.state = 206;
				this.mathEvalFn();
				}
				break;
			case esql_parser.PLUS:
			case esql_parser.MINUS:
				{
				this.state = 207;
				_localctx._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === esql_parser.PLUS || _la === esql_parser.MINUS)) {
					_localctx._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 208;
				this.operatorExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 219;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 217;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_operatorExpression);
						this.state = 211;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 212;
						_localctx._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (esql_parser.ASTERISK - 40)) | (1 << (esql_parser.SLASH - 40)) | (1 << (esql_parser.PERCENT - 40)))) !== 0))) {
							_localctx._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 213;
						_localctx._right = this.operatorExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new OperatorExpressionContext(_parentctx, _parentState);
						_localctx._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, esql_parser.RULE_operatorExpression);
						this.state = 214;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 215;
						_localctx._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === esql_parser.PLUS || _la === esql_parser.MINUS)) {
							_localctx._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 216;
						_localctx._right = this.operatorExpression(2);
						}
						break;
					}
					}
				}
				this.state = 221;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, esql_parser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.qualifiedName();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.match(esql_parser.LP);
				this.state = 225;
				this.booleanExpression(0);
				this.state = 226;
				this.match(esql_parser.RP);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 228;
				this.identifier();
				this.state = 229;
				this.match(esql_parser.LP);
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << esql_parser.STRING) | (1 << esql_parser.INTEGER_LITERAL) | (1 << esql_parser.DECIMAL_LITERAL) | (1 << esql_parser.LP) | (1 << esql_parser.NOT))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (esql_parser.NULL - 33)) | (1 << (esql_parser.BOOLEAN_VALUE - 33)) | (1 << (esql_parser.PLUS - 33)) | (1 << (esql_parser.MINUS - 33)) | (1 << (esql_parser.MATH_FUNCTION - 33)) | (1 << (esql_parser.UNARY_FUNCTION - 33)) | (1 << (esql_parser.IS_NULL_FUNCTION - 33)) | (1 << (esql_parser.UNQUOTED_IDENTIFIER - 33)) | (1 << (esql_parser.QUOTED_IDENTIFIER - 33)))) !== 0)) {
					{
					this.state = 230;
					this.booleanExpression(0);
					this.state = 235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === esql_parser.COMMA) {
						{
						{
						this.state = 231;
						this.match(esql_parser.COMMA);
						this.state = 232;
						this.booleanExpression(0);
						}
						}
						this.state = 237;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 240;
				this.match(esql_parser.RP);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowCommand(): RowCommandContext {
		let _localctx: RowCommandContext = new RowCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, esql_parser.RULE_rowCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(esql_parser.ROW);
			this.state = 245;
			this.fields();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fields(): FieldsContext {
		let _localctx: FieldsContext = new FieldsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, esql_parser.RULE_fields);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.field();
			this.state = 252;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 248;
					this.match(esql_parser.COMMA);
					this.state = 249;
					this.field();
					}
					}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, esql_parser.RULE_field);
		try {
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 255;
				this.booleanExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this.userVariable();
				this.state = 257;
				this.match(esql_parser.ASSIGN);
				this.state = 258;
				this.booleanExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userVariable(): UserVariableContext {
		let _localctx: UserVariableContext = new UserVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, esql_parser.RULE_userVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromCommand(): FromCommandContext {
		let _localctx: FromCommandContext = new FromCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, esql_parser.RULE_fromCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(esql_parser.FROM);
			this.state = 265;
			this.sourceIdentifier();
			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 266;
					this.match(esql_parser.COMMA);
					this.state = 267;
					this.sourceIdentifier();
					}
					}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public evalCommand(): EvalCommandContext {
		let _localctx: EvalCommandContext = new EvalCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, esql_parser.RULE_evalCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(esql_parser.EVAL);
			this.state = 274;
			this.fields();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statsCommand(): StatsCommandContext {
		let _localctx: StatsCommandContext = new StatsCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, esql_parser.RULE_statsCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(esql_parser.STATS);
			this.state = 278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 277;
				this.fields();
				}
				break;
			}
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 280;
				this.match(esql_parser.BY);
				this.state = 281;
				this.qualifiedNames();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceIdentifier(): SourceIdentifierContext {
		let _localctx: SourceIdentifierContext = new SourceIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, esql_parser.RULE_sourceIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			_la = this._input.LA(1);
			if (!(_la === esql_parser.SRC_UNQUOTED_IDENTIFIER || _la === esql_parser.SRC_QUOTED_IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpressionArgument(): FunctionExpressionArgumentContext {
		let _localctx: FunctionExpressionArgumentContext = new FunctionExpressionArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, esql_parser.RULE_functionExpressionArgument);
		try {
			this.state = 288;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.UNQUOTED_IDENTIFIER:
			case esql_parser.QUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.qualifiedName();
				}
				break;
			case esql_parser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 287;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathFunctionExpressionArgument(): MathFunctionExpressionArgumentContext {
		let _localctx: MathFunctionExpressionArgumentContext = new MathFunctionExpressionArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, esql_parser.RULE_mathFunctionExpressionArgument);
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.string();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 292;
				this.number();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 293;
				this.operatorExpression(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 294;
				this.number();
				{
				this.state = 295;
				this.match(esql_parser.DATE_LITERAL);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, esql_parser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.identifier();
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 300;
					this.match(esql_parser.DOT);
					this.state = 301;
					this.identifier();
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNames(): QualifiedNamesContext {
		let _localctx: QualifiedNamesContext = new QualifiedNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, esql_parser.RULE_qualifiedNames);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.qualifiedName();
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.match(esql_parser.COMMA);
					this.state = 309;
					this.qualifiedName();
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, esql_parser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			_la = this._input.LA(1);
			if (!(_la === esql_parser.UNQUOTED_IDENTIFIER || _la === esql_parser.QUOTED_IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mathFunctionIdentifier(): MathFunctionIdentifierContext {
		let _localctx: MathFunctionIdentifierContext = new MathFunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, esql_parser.RULE_mathFunctionIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(esql_parser.MATH_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionIdentifier(): FunctionIdentifierContext {
		let _localctx: FunctionIdentifierContext = new FunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, esql_parser.RULE_functionIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(esql_parser.UNARY_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, esql_parser.RULE_constant);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.NULL:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 321;
				this.match(esql_parser.NULL);
				}
				break;
			case esql_parser.INTEGER_LITERAL:
			case esql_parser.DECIMAL_LITERAL:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 322;
				this.number();
				}
				break;
			case esql_parser.BOOLEAN_VALUE:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 323;
				this.booleanValue();
				}
				break;
			case esql_parser.STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 324;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitCommand(): LimitCommandContext {
		let _localctx: LimitCommandContext = new LimitCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, esql_parser.RULE_limitCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.match(esql_parser.LIMIT);
			this.state = 328;
			this.match(esql_parser.INTEGER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortCommand(): SortCommandContext {
		let _localctx: SortCommandContext = new SortCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, esql_parser.RULE_sortCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(esql_parser.SORT);
			this.state = 331;
			this.orderExpression();
			this.state = 336;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 332;
					this.match(esql_parser.COMMA);
					this.state = 333;
					this.orderExpression();
					}
					}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderExpression(): OrderExpressionContext {
		let _localctx: OrderExpressionContext = new OrderExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, esql_parser.RULE_orderExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.booleanExpression(0);
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 340;
				this.match(esql_parser.ORDERING);
				}
				break;
			}
			this.state = 345;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 343;
				this.match(esql_parser.NULLS_ORDERING);
				{
				this.state = 344;
				this.match(esql_parser.NULLS_ORDERING_DIRECTION);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public projectCommand(): ProjectCommandContext {
		let _localctx: ProjectCommandContext = new ProjectCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, esql_parser.RULE_projectCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(esql_parser.PROJECT);
			this.state = 348;
			this.qualifiedNames();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropCommand(): DropCommandContext {
		let _localctx: DropCommandContext = new DropCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, esql_parser.RULE_dropCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.match(esql_parser.DROP);
			this.state = 351;
			this.qualifiedNames();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameVariable(): RenameVariableContext {
		let _localctx: RenameVariableContext = new RenameVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, esql_parser.RULE_renameVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameCommand(): RenameCommandContext {
		let _localctx: RenameCommandContext = new RenameCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, esql_parser.RULE_renameCommand);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(esql_parser.RENAME);
			this.state = 356;
			this.renameClause();
			this.state = 361;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 357;
					this.match(esql_parser.COMMA);
					this.state = 358;
					this.renameClause();
					}
					}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameClause(): RenameClauseContext {
		let _localctx: RenameClauseContext = new RenameClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, esql_parser.RULE_renameClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.renameVariable();
			this.state = 365;
			this.match(esql_parser.ASSIGN);
			this.state = 366;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dissectCommand(): DissectCommandContext {
		let _localctx: DissectCommandContext = new DissectCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, esql_parser.RULE_dissectCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(esql_parser.DISSECT);
			this.state = 369;
			this.qualifiedNames();
			this.state = 370;
			this.string();
			this.state = 372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 371;
				this.commandOptions();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grokCommand(): GrokCommandContext {
		let _localctx: GrokCommandContext = new GrokCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, esql_parser.RULE_grokCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(esql_parser.GROK);
			this.state = 375;
			this.qualifiedNames();
			this.state = 376;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandOptions(): CommandOptionsContext {
		let _localctx: CommandOptionsContext = new CommandOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, esql_parser.RULE_commandOptions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.commandOption();
			this.state = 383;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 379;
					this.match(esql_parser.COMMA);
					this.state = 380;
					this.commandOption();
					}
					}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commandOption(): CommandOptionContext {
		let _localctx: CommandOptionContext = new CommandOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, esql_parser.RULE_commandOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.identifier();
			this.state = 387;
			this.match(esql_parser.ASSIGN);
			this.state = 388;
			this.constant();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, esql_parser.RULE_booleanValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(esql_parser.BOOLEAN_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, esql_parser.RULE_number);
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case esql_parser.DECIMAL_LITERAL:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 392;
				this.match(esql_parser.DECIMAL_LITERAL);
				}
				break;
			case esql_parser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 393;
				this.match(esql_parser.INTEGER_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, esql_parser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(esql_parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, esql_parser.RULE_comparisonOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(esql_parser.COMPARISON_OPERATOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainCommand(): ExplainCommandContext {
		let _localctx: ExplainCommandContext = new ExplainCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, esql_parser.RULE_explainCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(esql_parser.EXPLAIN);
			this.state = 401;
			this.subqueryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subqueryExpression(): SubqueryExpressionContext {
		let _localctx: SubqueryExpressionContext = new SubqueryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, esql_parser.RULE_subqueryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(esql_parser.OPENING_BRACKET);
			this.state = 404;
			this.query(0);
			this.state = 405;
			this.match(esql_parser.CLOSING_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.query_sempred(_localctx as QueryContext, predIndex);

		case 5:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 11:
			return this.operatorExpression_sempred(_localctx as OperatorExpressionContext, predIndex);
		}
		return true;
	}
	private query_sempred(_localctx: QueryContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private operatorExpression_sempred(_localctx: OperatorExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03<\u019A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03j\n\x03\f\x03\x0E\x03" +
		"m\v\x03\x03\x04\x03\x04\x03\x04\x05\x04r\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05~\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x8D\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x07\x07\x95\n\x07\f\x07\x0E\x07\x98\v\x07" +
		"\x03\b\x03\b\x05\b\x9C\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA3\n\b" +
		"\x03\b\x03\b\x03\b\x05\b\xA8\n\b\x03\t\x03\t\x05\t\xAC\n\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xB7\n\v\f\v\x0E\v\xBA" +
		"\v\v\x05\v\xBC\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xC5" +
		"\n\f\f\f\x0E\f\xC8\v\f\x05\f\xCA\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\xD4\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r" +
		"\xDC\n\r\f\r\x0E\r\xDF\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xEC\n\x0E\f\x0E\x0E" +
		"\x0E\xEF\v\x0E\x05\x0E\xF1\n\x0E\x03\x0E\x03\x0E\x05\x0E\xF5\n\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xFD\n\x10\f\x10\x0E" +
		"\x10\u0100\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0107" +
		"\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u010F\n" +
		"\x13\f\x13\x0E\x13\u0112\v\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x05\x15\u0119\n\x15\x03\x15\x03\x15\x05\x15\u011D\n\x15\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x05\x17\u0123\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u012C\n\x18\x03\x19\x03\x19\x03\x19\x07\x19" +
		"\u0131\n\x19\f\x19\x0E\x19\u0134\v\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u0139\n\x1A\f\x1A\x0E\x1A\u013C\v\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0148\n\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x07 \u0151\n \f \x0E \u0154\v" +
		" \x03!\x03!\x05!\u0158\n!\x03!\x03!\x05!\u015C\n!\x03\"\x03\"\x03\"\x03" +
		"#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03%\x07%\u016A\n%\f%\x0E%\u016D" +
		"\v%\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x05\'\u0177\n\'\x03(\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x07)\u0180\n)\f)\x0E)\u0183\v)\x03*\x03*\x03" +
		"*\x03*\x03+\x03+\x03,\x03,\x05,\u018D\n,\x03-\x03-\x03.\x03.\x03/\x03" +
		"/\x03/\x030\x030\x030\x030\x030\x02\x02\x05\x04\f\x181\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02\x02\x06\x03\x02()" +
		"\x03\x02*,\x03\x0289\x03\x0234\x02\u01A3\x02`\x03\x02\x02\x02\x04c\x03" +
		"\x02\x02\x02\x06q\x03\x02\x02\x02\b}\x03\x02\x02\x02\n\x7F\x03\x02\x02" +
		"\x02\f\x8C\x03\x02\x02\x02\x0E\xA7\x03\x02\x02\x02\x10\xAB\x03\x02\x02" +
		"\x02\x12\xAD\x03\x02\x02\x02\x14\xB1\x03\x02\x02\x02\x16\xBF\x03\x02\x02" +
		"\x02\x18\xD3\x03\x02\x02\x02\x1A\xF4\x03\x02\x02\x02\x1C\xF6\x03\x02\x02" +
		"\x02\x1E\xF9\x03\x02\x02\x02 \u0106\x03\x02\x02\x02\"\u0108\x03\x02\x02" +
		"\x02$\u010A\x03\x02\x02\x02&\u0113\x03\x02\x02\x02(\u0116\x03\x02\x02" +
		"\x02*\u011E\x03\x02\x02\x02,\u0122\x03\x02\x02\x02.\u012B\x03\x02\x02" +
		"\x020\u012D\x03\x02\x02\x022\u0135\x03\x02\x02\x024\u013D\x03\x02\x02" +
		"\x026\u013F\x03\x02\x02\x028\u0141\x03\x02\x02\x02:\u0147\x03\x02\x02" +
		"\x02<\u0149\x03\x02\x02\x02>\u014C\x03\x02\x02\x02@\u0155\x03\x02\x02" +
		"\x02B\u015D\x03\x02\x02\x02D\u0160\x03\x02\x02\x02F\u0163\x03\x02\x02" +
		"\x02H\u0165\x03\x02\x02\x02J\u016E\x03\x02\x02\x02L\u0172\x03\x02\x02" +
		"\x02N\u0178\x03\x02\x02\x02P\u017C\x03\x02\x02\x02R\u0184\x03\x02\x02" +
		"\x02T\u0188\x03\x02\x02\x02V\u018C\x03\x02\x02\x02X\u018E\x03\x02\x02" +
		"\x02Z\u0190\x03\x02\x02\x02\\\u0192\x03\x02\x02\x02^\u0195\x03\x02\x02" +
		"\x02`a\x05\x04\x03\x02ab\x07\x02\x02\x03b\x03\x03\x02\x02\x02cd\b\x03" +
		"\x01\x02de\x05\x06\x04\x02ek\x03\x02\x02\x02fg\f\x03\x02\x02gh\x07\x13" +
		"\x02\x02hj\x05\b\x05\x02if\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02" +
		"\x02\x02kl\x03\x02\x02\x02l\x05\x03\x02\x02\x02mk\x03\x02\x02\x02nr\x05" +
		"\\/\x02or\x05$\x13\x02pr\x05\x1C\x0F\x02qn\x03\x02\x02\x02qo\x03\x02\x02" +
		"\x02qp\x03\x02\x02\x02r\x07\x03\x02\x02\x02s~\x05&\x14\x02t~\x05<\x1F" +
		"\x02u~\x05B\"\x02v~\x05H%\x02w~\x05D#\x02x~\x05L\'\x02y~\x05N(\x02z~\x05" +
		"> \x02{~\x05(\x15\x02|~\x05\n\x06\x02}s\x03\x02\x02\x02}t\x03\x02\x02" +
		"\x02}u\x03\x02\x02\x02}v\x03\x02\x02\x02}w\x03\x02\x02\x02}x\x03\x02\x02" +
		"\x02}y\x03\x02\x02\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02}|\x03\x02\x02" +
		"\x02~\t\x03\x02\x02\x02\x7F\x80\x07\n\x02\x02\x80\x81\x05\f\x07\x02\x81" +
		"\v\x03\x02\x02\x02\x82\x83\b\x07\x01\x02\x83\x84\x07 \x02\x02\x84\x8D" +
		"\x05\f\x07\b\x85\x8D\x05\x10\t\x02\x86\x8D\x05\x0E\b\x02\x87\x88\x072" +
		"\x02\x02\x88\x89\x07\x1D\x02\x02\x89\x8A\x050\x19\x02\x8A\x8B\x07%\x02" +
		"\x02\x8B\x8D\x03\x02\x02\x02\x8C\x82\x03\x02\x02\x02\x8C\x85\x03\x02\x02" +
		"\x02\x8C\x86\x03\x02\x02\x02\x8C\x87\x03\x02\x02\x02\x8D\x96\x03\x02\x02" +
		"\x02\x8E\x8F\f\x05\x02\x02\x8F\x90\x07\x19\x02\x02\x90\x95\x05\f\x07\x06" +
		"\x91\x92\f\x04\x02\x02\x92\x93\x07$\x02\x02\x93\x95\x05\f\x07\x05\x94" +
		"\x8E\x03\x02\x02\x02\x94\x91\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96" +
		"\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\r\x03\x02\x02\x02\x98" +
		"\x96\x03\x02\x02\x02\x99\x9B\x05\x10\t\x02\x9A\x9C\x07 \x02\x02\x9B\x9A" +
		"\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E" +
		"\x07!\x02\x02\x9E\x9F\x05X-\x02\x9F\xA8\x03\x02\x02\x02\xA0\xA2\x05\x10" +
		"\t\x02\xA1\xA3\x07 \x02\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02" +
		"\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07\"\x02\x02\xA5\xA6\x05X-\x02\xA6" +
		"\xA8\x03\x02\x02\x02\xA7\x99\x03\x02\x02\x02\xA7\xA0\x03\x02\x02\x02\xA8" +
		"\x0F\x03\x02\x02\x02\xA9\xAC\x05\x18\r\x02\xAA\xAC\x05\x12\n\x02\xAB\xA9" +
		"\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\x11\x03\x02\x02\x02\xAD\xAE" +
		"\x05\x18\r\x02\xAE\xAF\x05Z.\x02\xAF\xB0\x05\x18\r\x02\xB0\x13\x03\x02" +
		"\x02\x02\xB1\xB2\x058\x1D\x02\xB2\xBB\x07\x1D\x02\x02\xB3\xB8\x05,\x17" +
		"\x02\xB4\xB5\x07\x1B\x02\x02\xB5\xB7\x05,\x17\x02\xB6\xB4\x03\x02\x02" +
		"\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02" +
		"\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xB3\x03\x02\x02" +
		"\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x07%\x02" +
		"\x02\xBE\x15\x03\x02\x02\x02\xBF\xC0\x056\x1C\x02\xC0\xC9\x07\x1D\x02" +
		"\x02\xC1\xC6\x05.\x18\x02\xC2\xC3\x07\x1B\x02\x02\xC3\xC5\x05.\x18\x02" +
		"\xC4\xC2\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02" +
		"\xC6\xC7\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02" +
		"\xC9\xC1\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02" +
		"\xCB\xCC\x07%\x02\x02\xCC\x17\x03\x02\x02\x02\xCD\xCE\b\r\x01\x02\xCE" +
		"\xD4\x05\x1A\x0E\x02\xCF\xD4\x05\x14\v\x02\xD0\xD4\x05\x16\f\x02\xD1\xD2" +
		"\t\x02\x02\x02\xD2\xD4\x05\x18\r\x05\xD3\xCD\x03\x02\x02\x02\xD3\xCF\x03" +
		"\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xDD\x03" +
		"\x02\x02\x02\xD5\xD6\f\x04\x02\x02\xD6\xD7\t\x03\x02\x02\xD7\xDC\x05\x18" +
		"\r\x05\xD8\xD9\f\x03\x02\x02\xD9\xDA\t\x02\x02\x02\xDA\xDC\x05\x18\r\x04" +
		"\xDB\xD5\x03\x02\x02\x02\xDB\xD8\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02" +
		"\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\x19\x03\x02\x02\x02" +
		"\xDF\xDD\x03\x02\x02\x02\xE0\xF5\x05:\x1E\x02\xE1\xF5\x050\x19\x02\xE2" +
		"\xE3\x07\x1D\x02\x02\xE3\xE4\x05\f\x07\x02\xE4\xE5\x07%\x02\x02\xE5\xF5" +
		"\x03\x02\x02\x02\xE6\xE7\x054\x1B\x02\xE7\xF0\x07\x1D\x02\x02\xE8\xED" +
		"\x05\f\x07\x02\xE9\xEA\x07\x1B\x02\x02\xEA\xEC\x05\f\x07\x02\xEB\xE9\x03" +
		"\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03" +
		"\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xE8\x03" +
		"\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x07" +
		"%\x02\x02\xF3\xF5\x03\x02\x02\x02\xF4\xE0\x03\x02\x02\x02\xF4\xE1\x03" +
		"\x02\x02\x02\xF4\xE2\x03\x02\x02\x02\xF4\xE6\x03\x02\x02\x02\xF5\x1B\x03" +
		"\x02\x02\x02\xF6\xF7\x07\b\x02\x02\xF7\xF8\x05\x1E\x10\x02\xF8\x1D\x03" +
		"\x02\x02\x02\xF9\xFE\x05 \x11\x02\xFA\xFB\x07\x1B\x02\x02\xFB\xFD\x05" +
		" \x11\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03" +
		"\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\x1F\x03\x02\x02\x02\u0100\xFE" +
		"\x03\x02\x02\x02\u0101\u0107\x05\f\x07\x02\u0102\u0103\x05\"\x12\x02\u0103" +
		"\u0104\x07\x1A\x02\x02\u0104\u0105\x05\f\x07\x02\u0105\u0107\x03\x02\x02" +
		"\x02\u0106\u0101\x03\x02\x02\x02\u0106\u0102\x03\x02\x02\x02\u0107!\x03" +
		"\x02\x02\x02\u0108\u0109\x054\x1B\x02\u0109#\x03\x02\x02\x02\u010A\u010B" +
		"\x07\x07\x02\x02\u010B\u0110\x05*\x16\x02\u010C\u010D\x07\x1B\x02\x02" +
		"\u010D\u010F\x05*\x16\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0112\x03" +
		"\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111" +
		"%\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0114\x07\x05\x02" +
		"\x02\u0114\u0115\x05\x1E\x10\x02\u0115\'\x03\x02\x02\x02\u0116\u0118\x07" +
		"\t\x02\x02\u0117\u0119\x05\x1E\x10\x02\u0118\u0117\x03\x02\x02\x02\u0118" +
		"\u0119\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u011B\x07\x17" +
		"\x02\x02\u011B\u011D\x052\x1A\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D" +
		"\x03\x02\x02\x02\u011D)\x03\x02\x02\x02\u011E\u011F\t\x04\x02\x02\u011F" +
		"+\x03\x02\x02\x02\u0120\u0123\x050\x19\x02\u0121\u0123\x05X-\x02\u0122" +
		"\u0120\x03\x02\x02\x02\u0122\u0121\x03\x02\x02\x02\u0123-\x03\x02\x02" +
		"\x02\u0124\u012C\x050\x19\x02\u0125\u012C\x05X-\x02\u0126\u012C\x05V," +
		"\x02\u0127\u012C\x05\x18\r\x02\u0128\u0129\x05V,\x02\u0129\u012A\x07\x18" +
		"\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0124\x03\x02\x02\x02\u012B" +
		"\u0125\x03\x02\x02\x02\u012B\u0126\x03\x02\x02\x02\u012B\u0127\x03\x02" +
		"\x02\x02\u012B\u0128\x03\x02\x02\x02\u012C/\x03\x02\x02\x02\u012D\u0132" +
		"\x054\x1B\x02\u012E\u012F\x07\x1C\x02\x02\u012F\u0131\x054\x1B\x02\u0130" +
		"\u012E\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02" +
		"\x02\x02\u0132\u0133\x03\x02\x02\x02\u01331\x03\x02\x02\x02\u0134\u0132" +
		"\x03\x02\x02\x02\u0135\u013A\x050\x19\x02\u0136\u0137\x07\x1B\x02\x02" +
		"\u0137\u0139\x050\x19\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013C\x03" +
		"\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B" +
		"3\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u013E\t\x05\x02\x02" +
		"\u013E5\x03\x02\x02\x02\u013F\u0140\x070\x02\x02\u01407\x03\x02\x02\x02" +
		"\u0141\u0142\x071\x02\x02\u01429\x03\x02\x02\x02\u0143\u0148\x07#\x02" +
		"\x02\u0144\u0148\x05V,\x02\u0145\u0148\x05T+\x02\u0146\u0148\x05X-\x02" +
		"\u0147\u0143\x03\x02\x02\x02\u0147\u0144\x03\x02\x02\x02\u0147\u0145\x03" +
		"\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148;\x03\x02\x02\x02\u0149" +
		"\u014A\x07\f\x02\x02\u014A\u014B\x07\x15\x02\x02\u014B=\x03\x02\x02\x02" +
		"\u014C\u014D\x07\v\x02\x02\u014D\u0152\x05@!\x02\u014E\u014F\x07\x1B\x02" +
		"\x02\u014F\u0151\x05@!\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0154\x03" +
		"\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"?\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\u0157\x05\f\x07\x02" +
		"\u0156\u0158\x07-\x02\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158\x03" +
		"\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u015A\x07.\x02\x02\u015A" +
		"\u015C\x07/\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02" +
		"\x02\u015CA\x03\x02\x02\x02\u015D\u015E\x07\r\x02\x02\u015E\u015F\x05" +
		"2\x1A\x02\u015FC\x03\x02\x02\x02\u0160\u0161\x07\x0E\x02\x02\u0161\u0162" +
		"\x052\x1A\x02\u0162E\x03\x02\x02\x02\u0163\u0164\x054\x1B\x02\u0164G\x03" +
		"\x02\x02\x02\u0165\u0166\x07\x0F\x02\x02\u0166\u016B\x05J&\x02\u0167\u0168" +
		"\x07\x1B\x02\x02\u0168\u016A\x05J&\x02\u0169\u0167\x03\x02\x02\x02\u016A" +
		"\u016D\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02" +
		"\x02\x02\u016CI\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u016F" +
		"\x05F$\x02\u016F\u0170\x07\x1A\x02\x02\u0170\u0171\x050\x19\x02\u0171" +
		"K\x03\x02\x02\x02\u0172\u0173\x07\x03\x02\x02\u0173\u0174\x052\x1A\x02" +
		"\u0174\u0176\x05X-\x02\u0175\u0177\x05P)\x02\u0176\u0175\x03\x02\x02\x02" +
		"\u0176\u0177\x03\x02\x02\x02\u0177M\x03\x02\x02\x02\u0178\u0179\x07\x04" +
		"\x02\x02\u0179\u017A\x052\x1A\x02\u017A\u017B\x05X-\x02\u017BO\x03\x02" +
		"\x02\x02\u017C\u0181\x05R*\x02\u017D\u017E\x07\x1B\x02\x02\u017E\u0180" +
		"\x05R*\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181" +
		"\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182Q\x03\x02\x02" +
		"\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0185\x054\x1B\x02\u0185\u0186" +
		"\x07\x1A\x02\x02\u0186\u0187\x05:\x1E\x02\u0187S\x03\x02\x02\x02\u0188" +
		"\u0189\x07&\x02\x02\u0189U\x03\x02\x02\x02\u018A\u018D\x07\x16\x02\x02" +
		"\u018B\u018D\x07\x15\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018B\x03" +
		"\x02\x02\x02\u018DW\x03\x02\x02\x02\u018E\u018F\x07\x14\x02\x02\u018F" +
		"Y\x03\x02\x02\x02\u0190\u0191\x07\'\x02\x02\u0191[\x03\x02\x02\x02\u0192" +
		"\u0193\x07\x06\x02\x02\u0193\u0194\x05^0\x02\u0194]\x03\x02\x02\x02\u0195" +
		"\u0196\x07\x1E\x02\x02\u0196\u0197\x05\x04\x03\x02\u0197\u0198\x07\x1F" +
		"\x02\x02\u0198_\x03\x02\x02\x02\'kq}\x8C\x94\x96\x9B\xA2\xA7\xAB\xB8\xBB" +
		"\xC6\xC9\xD3\xDB\xDD\xED\xF0\xF4\xFE\u0106\u0110\u0118\u011C\u0122\u012B" +
		"\u0132\u013A\u0147\u0152\u0157\u015B\u016B\u0176\u0181\u018C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!esql_parser.__ATN) {
			esql_parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(esql_parser._serializedATN));
		}

		return esql_parser.__ATN;
	}

}

export class SingleStatementContext extends ParserRuleContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public EOF(): TerminalNode { return this.getToken(esql_parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_singleStatement; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSingleStatement) {
			listener.enterSingleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSingleStatement) {
			listener.exitSingleStatement(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_query; }
	public copyFrom(ctx: QueryContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleCommandQueryContext extends QueryContext {
	public sourceCommand(): SourceCommandContext {
		return this.getRuleContext(0, SourceCommandContext);
	}
	constructor(ctx: QueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSingleCommandQuery) {
			listener.enterSingleCommandQuery(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSingleCommandQuery) {
			listener.exitSingleCommandQuery(this);
		}
	}
}
export class CompositeQueryContext extends QueryContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public PIPE(): TerminalNode { return this.getToken(esql_parser.PIPE, 0); }
	public processingCommand(): ProcessingCommandContext {
		return this.getRuleContext(0, ProcessingCommandContext);
	}
	constructor(ctx: QueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterCompositeQuery) {
			listener.enterCompositeQuery(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitCompositeQuery) {
			listener.exitCompositeQuery(this);
		}
	}
}


export class SourceCommandContext extends ParserRuleContext {
	public explainCommand(): ExplainCommandContext | undefined {
		return this.tryGetRuleContext(0, ExplainCommandContext);
	}
	public fromCommand(): FromCommandContext | undefined {
		return this.tryGetRuleContext(0, FromCommandContext);
	}
	public rowCommand(): RowCommandContext | undefined {
		return this.tryGetRuleContext(0, RowCommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_sourceCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSourceCommand) {
			listener.enterSourceCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSourceCommand) {
			listener.exitSourceCommand(this);
		}
	}
}


export class ProcessingCommandContext extends ParserRuleContext {
	public evalCommand(): EvalCommandContext | undefined {
		return this.tryGetRuleContext(0, EvalCommandContext);
	}
	public limitCommand(): LimitCommandContext | undefined {
		return this.tryGetRuleContext(0, LimitCommandContext);
	}
	public projectCommand(): ProjectCommandContext | undefined {
		return this.tryGetRuleContext(0, ProjectCommandContext);
	}
	public renameCommand(): RenameCommandContext | undefined {
		return this.tryGetRuleContext(0, RenameCommandContext);
	}
	public dropCommand(): DropCommandContext | undefined {
		return this.tryGetRuleContext(0, DropCommandContext);
	}
	public dissectCommand(): DissectCommandContext | undefined {
		return this.tryGetRuleContext(0, DissectCommandContext);
	}
	public grokCommand(): GrokCommandContext | undefined {
		return this.tryGetRuleContext(0, GrokCommandContext);
	}
	public sortCommand(): SortCommandContext | undefined {
		return this.tryGetRuleContext(0, SortCommandContext);
	}
	public statsCommand(): StatsCommandContext | undefined {
		return this.tryGetRuleContext(0, StatsCommandContext);
	}
	public whereCommand(): WhereCommandContext | undefined {
		return this.tryGetRuleContext(0, WhereCommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_processingCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterProcessingCommand) {
			listener.enterProcessingCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitProcessingCommand) {
			listener.exitProcessingCommand(this);
		}
	}
}


export class WhereCommandContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(esql_parser.WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_whereCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterWhereCommand) {
			listener.enterWhereCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitWhereCommand) {
			listener.exitWhereCommand(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	public _left: BooleanExpressionContext;
	public _operator: Token;
	public _right: BooleanExpressionContext;
	public NOT(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public valueExpression(): ValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, ValueExpressionContext);
	}
	public regexBooleanExpression(): RegexBooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, RegexBooleanExpressionContext);
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(esql_parser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(esql_parser.OR, 0); }
	public IS_NULL_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(esql_parser.IS_NULL_FUNCTION, 0); }
	public LP(): TerminalNode | undefined { return this.tryGetToken(esql_parser.LP, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public RP(): TerminalNode | undefined { return this.tryGetToken(esql_parser.RP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_booleanExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterBooleanExpression) {
			listener.enterBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitBooleanExpression) {
			listener.exitBooleanExpression(this);
		}
	}
}


export class RegexBooleanExpressionContext extends ParserRuleContext {
	public _kind: Token;
	public _pattern: StringContext;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(esql_parser.LIKE, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NOT, 0); }
	public RLIKE(): TerminalNode | undefined { return this.tryGetToken(esql_parser.RLIKE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_regexBooleanExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRegexBooleanExpression) {
			listener.enterRegexBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRegexBooleanExpression) {
			listener.exitRegexBooleanExpression(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	public operatorExpression(): OperatorExpressionContext | undefined {
		return this.tryGetRuleContext(0, OperatorExpressionContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_valueExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterValueExpression) {
			listener.enterValueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitValueExpression) {
			listener.exitValueExpression(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public _left: OperatorExpressionContext;
	public _right: OperatorExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public operatorExpression(): OperatorExpressionContext[];
	public operatorExpression(i: number): OperatorExpressionContext;
	public operatorExpression(i?: number): OperatorExpressionContext | OperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OperatorExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_comparison; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
}


export class MathFnContext extends ParserRuleContext {
	public functionIdentifier(): FunctionIdentifierContext {
		return this.getRuleContext(0, FunctionIdentifierContext);
	}
	public LP(): TerminalNode { return this.getToken(esql_parser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(esql_parser.RP, 0); }
	public functionExpressionArgument(): FunctionExpressionArgumentContext[];
	public functionExpressionArgument(i: number): FunctionExpressionArgumentContext;
	public functionExpressionArgument(i?: number): FunctionExpressionArgumentContext | FunctionExpressionArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionExpressionArgumentContext);
		} else {
			return this.getRuleContext(i, FunctionExpressionArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_mathFn; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterMathFn) {
			listener.enterMathFn(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitMathFn) {
			listener.exitMathFn(this);
		}
	}
}


export class MathEvalFnContext extends ParserRuleContext {
	public mathFunctionIdentifier(): MathFunctionIdentifierContext {
		return this.getRuleContext(0, MathFunctionIdentifierContext);
	}
	public LP(): TerminalNode { return this.getToken(esql_parser.LP, 0); }
	public RP(): TerminalNode { return this.getToken(esql_parser.RP, 0); }
	public mathFunctionExpressionArgument(): MathFunctionExpressionArgumentContext[];
	public mathFunctionExpressionArgument(i: number): MathFunctionExpressionArgumentContext;
	public mathFunctionExpressionArgument(i?: number): MathFunctionExpressionArgumentContext | MathFunctionExpressionArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MathFunctionExpressionArgumentContext);
		} else {
			return this.getRuleContext(i, MathFunctionExpressionArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_mathEvalFn; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterMathEvalFn) {
			listener.enterMathEvalFn(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitMathEvalFn) {
			listener.exitMathEvalFn(this);
		}
	}
}


export class OperatorExpressionContext extends ParserRuleContext {
	public _left: OperatorExpressionContext;
	public _operator: Token;
	public _right: OperatorExpressionContext;
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public mathFn(): MathFnContext | undefined {
		return this.tryGetRuleContext(0, MathFnContext);
	}
	public mathEvalFn(): MathEvalFnContext | undefined {
		return this.tryGetRuleContext(0, MathEvalFnContext);
	}
	public operatorExpression(): OperatorExpressionContext[];
	public operatorExpression(i: number): OperatorExpressionContext;
	public operatorExpression(i?: number): OperatorExpressionContext | OperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OperatorExpressionContext);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(esql_parser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(esql_parser.PLUS, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(esql_parser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(esql_parser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(esql_parser.PERCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_operatorExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterOperatorExpression) {
			listener.enterOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitOperatorExpression) {
			listener.exitOperatorExpression(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public LP(): TerminalNode | undefined { return this.tryGetToken(esql_parser.LP, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public RP(): TerminalNode | undefined { return this.tryGetToken(esql_parser.RP, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
}


export class RowCommandContext extends ParserRuleContext {
	public ROW(): TerminalNode { return this.getToken(esql_parser.ROW, 0); }
	public fields(): FieldsContext {
		return this.getRuleContext(0, FieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_rowCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRowCommand) {
			listener.enterRowCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRowCommand) {
			listener.exitRowCommand(this);
		}
	}
}


export class FieldsContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_fields; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterFields) {
			listener.enterFields(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitFields) {
			listener.exitFields(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public userVariable(): UserVariableContext | undefined {
		return this.tryGetRuleContext(0, UserVariableContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(esql_parser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_field; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class UserVariableContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_userVariable; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterUserVariable) {
			listener.enterUserVariable(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitUserVariable) {
			listener.exitUserVariable(this);
		}
	}
}


export class FromCommandContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(esql_parser.FROM, 0); }
	public sourceIdentifier(): SourceIdentifierContext[];
	public sourceIdentifier(i: number): SourceIdentifierContext;
	public sourceIdentifier(i?: number): SourceIdentifierContext | SourceIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceIdentifierContext);
		} else {
			return this.getRuleContext(i, SourceIdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_fromCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterFromCommand) {
			listener.enterFromCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitFromCommand) {
			listener.exitFromCommand(this);
		}
	}
}


export class EvalCommandContext extends ParserRuleContext {
	public EVAL(): TerminalNode { return this.getToken(esql_parser.EVAL, 0); }
	public fields(): FieldsContext {
		return this.getRuleContext(0, FieldsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_evalCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterEvalCommand) {
			listener.enterEvalCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitEvalCommand) {
			listener.exitEvalCommand(this);
		}
	}
}


export class StatsCommandContext extends ParserRuleContext {
	public STATS(): TerminalNode { return this.getToken(esql_parser.STATS, 0); }
	public fields(): FieldsContext | undefined {
		return this.tryGetRuleContext(0, FieldsContext);
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(esql_parser.BY, 0); }
	public qualifiedNames(): QualifiedNamesContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNamesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_statsCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterStatsCommand) {
			listener.enterStatsCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitStatsCommand) {
			listener.exitStatsCommand(this);
		}
	}
}


export class SourceIdentifierContext extends ParserRuleContext {
	public SRC_UNQUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(esql_parser.SRC_UNQUOTED_IDENTIFIER, 0); }
	public SRC_QUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(esql_parser.SRC_QUOTED_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_sourceIdentifier; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSourceIdentifier) {
			listener.enterSourceIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSourceIdentifier) {
			listener.exitSourceIdentifier(this);
		}
	}
}


export class FunctionExpressionArgumentContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_functionExpressionArgument; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterFunctionExpressionArgument) {
			listener.enterFunctionExpressionArgument(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitFunctionExpressionArgument) {
			listener.exitFunctionExpressionArgument(this);
		}
	}
}


export class MathFunctionExpressionArgumentContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public operatorExpression(): OperatorExpressionContext | undefined {
		return this.tryGetRuleContext(0, OperatorExpressionContext);
	}
	public DATE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(esql_parser.DATE_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_mathFunctionExpressionArgument; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterMathFunctionExpressionArgument) {
			listener.enterMathFunctionExpressionArgument(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitMathFunctionExpressionArgument) {
			listener.exitMathFunctionExpressionArgument(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.DOT);
		} else {
			return this.getToken(esql_parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
}


export class QualifiedNamesContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_qualifiedNames; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterQualifiedNames) {
			listener.enterQualifiedNames(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitQualifiedNames) {
			listener.exitQualifiedNames(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public UNQUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(esql_parser.UNQUOTED_IDENTIFIER, 0); }
	public QUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(esql_parser.QUOTED_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_identifier; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class MathFunctionIdentifierContext extends ParserRuleContext {
	public MATH_FUNCTION(): TerminalNode { return this.getToken(esql_parser.MATH_FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_mathFunctionIdentifier; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterMathFunctionIdentifier) {
			listener.enterMathFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitMathFunctionIdentifier) {
			listener.exitMathFunctionIdentifier(this);
		}
	}
}


export class FunctionIdentifierContext extends ParserRuleContext {
	public UNARY_FUNCTION(): TerminalNode { return this.getToken(esql_parser.UNARY_FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_functionIdentifier; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterFunctionIdentifier) {
			listener.enterFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitFunctionIdentifier) {
			listener.exitFunctionIdentifier(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_constant; }
	public copyFrom(ctx: ConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends ConstantContext {
	public NULL(): TerminalNode { return this.getToken(esql_parser.NULL, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
}
export class NumericLiteralContext extends ConstantContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
}
export class BooleanLiteralContext extends ConstantContext {
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
}
export class StringLiteralContext extends ConstantContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
}


export class LimitCommandContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(esql_parser.LIMIT, 0); }
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(esql_parser.INTEGER_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_limitCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterLimitCommand) {
			listener.enterLimitCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitLimitCommand) {
			listener.exitLimitCommand(this);
		}
	}
}


export class SortCommandContext extends ParserRuleContext {
	public SORT(): TerminalNode { return this.getToken(esql_parser.SORT, 0); }
	public orderExpression(): OrderExpressionContext[];
	public orderExpression(i: number): OrderExpressionContext;
	public orderExpression(i?: number): OrderExpressionContext | OrderExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderExpressionContext);
		} else {
			return this.getRuleContext(i, OrderExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_sortCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSortCommand) {
			listener.enterSortCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSortCommand) {
			listener.exitSortCommand(this);
		}
	}
}


export class OrderExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public ORDERING(): TerminalNode | undefined { return this.tryGetToken(esql_parser.ORDERING, 0); }
	public NULLS_ORDERING(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NULLS_ORDERING, 0); }
	public NULLS_ORDERING_DIRECTION(): TerminalNode | undefined { return this.tryGetToken(esql_parser.NULLS_ORDERING_DIRECTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_orderExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterOrderExpression) {
			listener.enterOrderExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitOrderExpression) {
			listener.exitOrderExpression(this);
		}
	}
}


export class ProjectCommandContext extends ParserRuleContext {
	public PROJECT(): TerminalNode { return this.getToken(esql_parser.PROJECT, 0); }
	public qualifiedNames(): QualifiedNamesContext {
		return this.getRuleContext(0, QualifiedNamesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_projectCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterProjectCommand) {
			listener.enterProjectCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitProjectCommand) {
			listener.exitProjectCommand(this);
		}
	}
}


export class DropCommandContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(esql_parser.DROP, 0); }
	public qualifiedNames(): QualifiedNamesContext {
		return this.getRuleContext(0, QualifiedNamesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_dropCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterDropCommand) {
			listener.enterDropCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitDropCommand) {
			listener.exitDropCommand(this);
		}
	}
}


export class RenameVariableContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_renameVariable; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRenameVariable) {
			listener.enterRenameVariable(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRenameVariable) {
			listener.exitRenameVariable(this);
		}
	}
}


export class RenameCommandContext extends ParserRuleContext {
	public RENAME(): TerminalNode { return this.getToken(esql_parser.RENAME, 0); }
	public renameClause(): RenameClauseContext[];
	public renameClause(i: number): RenameClauseContext;
	public renameClause(i?: number): RenameClauseContext | RenameClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RenameClauseContext);
		} else {
			return this.getRuleContext(i, RenameClauseContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_renameCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRenameCommand) {
			listener.enterRenameCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRenameCommand) {
			listener.exitRenameCommand(this);
		}
	}
}


export class RenameClauseContext extends ParserRuleContext {
	public renameVariable(): RenameVariableContext {
		return this.getRuleContext(0, RenameVariableContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(esql_parser.ASSIGN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_renameClause; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterRenameClause) {
			listener.enterRenameClause(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitRenameClause) {
			listener.exitRenameClause(this);
		}
	}
}


export class DissectCommandContext extends ParserRuleContext {
	public DISSECT(): TerminalNode { return this.getToken(esql_parser.DISSECT, 0); }
	public qualifiedNames(): QualifiedNamesContext {
		return this.getRuleContext(0, QualifiedNamesContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public commandOptions(): CommandOptionsContext | undefined {
		return this.tryGetRuleContext(0, CommandOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_dissectCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterDissectCommand) {
			listener.enterDissectCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitDissectCommand) {
			listener.exitDissectCommand(this);
		}
	}
}


export class GrokCommandContext extends ParserRuleContext {
	public GROK(): TerminalNode { return this.getToken(esql_parser.GROK, 0); }
	public qualifiedNames(): QualifiedNamesContext {
		return this.getRuleContext(0, QualifiedNamesContext);
	}
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_grokCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterGrokCommand) {
			listener.enterGrokCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitGrokCommand) {
			listener.exitGrokCommand(this);
		}
	}
}


export class CommandOptionsContext extends ParserRuleContext {
	public commandOption(): CommandOptionContext[];
	public commandOption(i: number): CommandOptionContext;
	public commandOption(i?: number): CommandOptionContext | CommandOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandOptionContext);
		} else {
			return this.getRuleContext(i, CommandOptionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(esql_parser.COMMA);
		} else {
			return this.getToken(esql_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_commandOptions; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterCommandOptions) {
			listener.enterCommandOptions(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitCommandOptions) {
			listener.exitCommandOptions(this);
		}
	}
}


export class CommandOptionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(esql_parser.ASSIGN, 0); }
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_commandOption; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterCommandOption) {
			listener.enterCommandOption(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitCommandOption) {
			listener.exitCommandOption(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public BOOLEAN_VALUE(): TerminalNode { return this.getToken(esql_parser.BOOLEAN_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_LITERAL(): TerminalNode { return this.getToken(esql_parser.DECIMAL_LITERAL, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(esql_parser.INTEGER_LITERAL, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(esql_parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_string; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public COMPARISON_OPERATOR(): TerminalNode { return this.getToken(esql_parser.COMPARISON_OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
}


export class ExplainCommandContext extends ParserRuleContext {
	public EXPLAIN(): TerminalNode { return this.getToken(esql_parser.EXPLAIN, 0); }
	public subqueryExpression(): SubqueryExpressionContext {
		return this.getRuleContext(0, SubqueryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_explainCommand; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterExplainCommand) {
			listener.enterExplainCommand(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitExplainCommand) {
			listener.exitExplainCommand(this);
		}
	}
}


export class SubqueryExpressionContext extends ParserRuleContext {
	public OPENING_BRACKET(): TerminalNode { return this.getToken(esql_parser.OPENING_BRACKET, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public CLOSING_BRACKET(): TerminalNode { return this.getToken(esql_parser.CLOSING_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return esql_parser.RULE_subqueryExpression; }
	// @Override
	public enterRule(listener: esql_parserListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: esql_parserListener): void {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
}


